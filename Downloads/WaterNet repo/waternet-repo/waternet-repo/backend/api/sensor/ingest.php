<?php
/**
 * WATERNET — IoT Sensor Data Ingestion
 *
 * POST /api/sensor/ingest.php
 *
 * Called by each dispenser over Wi-Fi every ~30 seconds.
 * The machine authenticates with its unique device key (stored in firmware).
 *
 * Payload example:
 * {
 *   "device_key": "wn-secret-abc123",
 *   "machine_id": "WN-G001",
 *   "temp_ambient": 23.4,
 *   "temp_hot": 85.2,
 *   "temp_cold": 8.1,
 *   "tds": 48,
 *   "ph": 7.2,
 *   "purified_liters": 3,
 *   "raw_liters": 4
 * }
 *
 * Deploy to: public_html/api/sensor/ingest.php
 */

require_once __DIR__ . '/../../config/helpers.php';
require_once __DIR__ . '/../../config/database.php';

// IoT devices use a shared device secret (simpler than per-device JWT)
// In production, generate a unique key per machine stored in firmware
define('DEVICE_SECRET', 'your-iot-device-secret-key-change-this');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonError('Method not allowed', 405);

$body = getBody();

// Authenticate device
if (($body['device_key'] ?? '') !== DEVICE_SECRET) {
    jsonError('Invalid device key', 401);
}

$machineId = $body['machine_id'] ?? '';
if (!$machineId) jsonError('machine_id required');

$pdo = getPDO();

// Verify machine exists
$check = $pdo->prepare('SELECT id, client_id FROM machines WHERE id = ?');
$check->execute([$machineId]);
$machine = $check->fetch();
if (!$machine) jsonError('Unknown machine', 404);

// Validate and sanitise sensor values
$tempAmbient = isset($body['temp_ambient']) ? round((float)$body['temp_ambient'], 2) : null;
$tempHot     = isset($body['temp_hot'])     ? round((float)$body['temp_hot'], 2)     : null;
$tempCold    = isset($body['temp_cold'])    ? round((float)$body['temp_cold'], 2)    : null;
$tds         = isset($body['tds'])          ? (int)$body['tds']                      : null;
$ph          = isset($body['ph'])           ? round((float)$body['ph'], 2)           : null;
$purified    = isset($body['purified_liters']) ? (int)$body['purified_liters']       : null;
$raw         = isset($body['raw_liters'])   ? (int)$body['raw_liters']               : null;

// Insert reading
$ins = $pdo->prepare('
    INSERT INTO sensor_readings
        (machine_id, temp_ambient, temp_hot, temp_cold, tds, ph, purified_liters, raw_liters)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
');
$ins->execute([$machineId, $tempAmbient, $tempHot, $tempCold, $tds, $ph, $purified, $raw]);

// Update machine status
$status = 'online';
$pdo->prepare('UPDATE machines SET status = ? WHERE id = ?')->execute([$status, $machineId]);

// ── Auto-generate alerts based on client thresholds ──────────────────────
$thr = $pdo->prepare('SELECT * FROM alert_thresholds WHERE client_id = ?');
$thr->execute([$machine['client_id']]);
$thresholds = $thr->fetch() ?: ['tds_max'=>75,'ph_min'=>6.8,'ph_max'=>7.5,'temp_max'=>28.0];

$alertsToInsert = [];

if ($tds !== null && $tds > $thresholds['tds_max']) {
    $alertsToInsert[] = [$machineId, $machine['client_id'], 'tds', 'warning',
        "TDS on $machineId is {$tds} ppm — exceeds threshold of {$thresholds['tds_max']} ppm."];
}
if ($ph !== null && $ph < $thresholds['ph_min']) {
    $alertsToInsert[] = [$machineId, $machine['client_id'], 'ph', 'warning',
        "pH on $machineId dropped to {$ph} — below safe minimum of {$thresholds['ph_min']}."];
}
if ($tempAmbient !== null && $tempAmbient > $thresholds['temp_max']) {
    $alertsToInsert[] = [$machineId, $machine['client_id'], 'temperature', 'warning',
        "Ambient temperature on $machineId is {$tempAmbient}°C — above threshold of {$thresholds['temp_max']}°C."];
}

if ($alertsToInsert) {
    $ia = $pdo->prepare('
        INSERT INTO alerts (machine_id, client_id, type, severity, message) VALUES (?,?,?,?,?)
    ');
    foreach ($alertsToInsert as $a) $ia->execute($a);
}

jsonOk(['recorded' => true, 'alerts_generated' => count($alertsToInsert)]);
