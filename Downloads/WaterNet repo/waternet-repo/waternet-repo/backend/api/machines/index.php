<?php
/**
 * WATERNET — Machines API
 *
 * GET    /api/machines/index.php          → list machines for authenticated client
 * POST   /api/machines/index.php          → register new machine
 * GET    /api/machines/index.php?id=WN-G001 → single machine detail
 *
 * Admin can append ?client_id=2 to see another client's machines.
 * Deploy to: public_html/api/machines/index.php
 */

require_once __DIR__ . '/../../config/helpers.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../config/auth.php';

$auth = requireAuth();
$pdo  = getPDO();
$method = $_SERVER['REQUEST_METHOD'];

// ── Determine which client_id to use ──────────────────────────────────────
if ($auth['role'] === 'admin' && isset($_GET['client_id'])) {
    $clientId = (int) $_GET['client_id'];
} elseif ($auth['client_id']) {
    $clientId = (int) $auth['client_id'];
} else {
    jsonError('No client scope', 400);
}

// ── GET — list or single ───────────────────────────────────────────────────
if ($method === 'GET') {

    if (isset($_GET['id'])) {
        // Single machine + latest sensor reading
        $stmt = $pdo->prepare('
            SELECT m.*,
                   sr.temp_ambient, sr.temp_hot, sr.temp_cold,
                   sr.tds, sr.ph, sr.purified_liters, sr.raw_liters,
                   sr.recorded_at AS last_reading
            FROM machines m
            LEFT JOIN sensor_readings sr ON sr.machine_id = m.id
                AND sr.id = (SELECT MAX(id) FROM sensor_readings WHERE machine_id = m.id)
            WHERE m.id = ? AND m.client_id = ?
        ');
        $stmt->execute([$_GET['id'], $clientId]);
        $machine = $stmt->fetch();
        if (!$machine) jsonError('Machine not found', 404);
        jsonOk($machine);

    } else {
        // List all machines for client with latest sensor data
        $stmt = $pdo->prepare('
            SELECT m.*,
                   sr.temp_ambient, sr.temp_hot, sr.temp_cold,
                   sr.tds, sr.ph,
                   COALESCE((
                       SELECT SUM(purified_liters)
                       FROM sensor_readings
                       WHERE machine_id = m.id
                       AND DATE(recorded_at) = CURDATE()
                   ), 0) AS purified_today,
                   COALESCE((
                       SELECT SUM(raw_liters)
                       FROM sensor_readings
                       WHERE machine_id = m.id
                       AND DATE(recorded_at) = CURDATE()
                   ), 0) AS raw_today
            FROM machines m
            LEFT JOIN sensor_readings sr ON sr.machine_id = m.id
                AND sr.id = (SELECT MAX(id) FROM sensor_readings WHERE machine_id = m.id)
            WHERE m.client_id = ?
            ORDER BY m.id
        ');
        $stmt->execute([$clientId]);
        jsonOk($stmt->fetchAll());
    }
}

// ── POST — register new machine ───────────────────────────────────────────
if ($method === 'POST') {
    $body = getBody();

    $required = ['serial', 'mac_address', 'location', 'installed_at'];
    foreach ($required as $f) {
        if (empty($body[$f])) jsonError("Field '$f' is required");
    }

    // Validate MAC address format
    if (!preg_match('/^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/', $body['mac_address'])) {
        jsonError('Invalid MAC address format (expected AA:BB:CC:DD:EE:FF)');
    }

    // Generate machine ID: WN-{CLIENT_INITIALS}{NEXT_NUM}
    $clientStmt = $pdo->prepare('SELECT initials FROM clients WHERE id = ?');
    $clientStmt->execute([$clientId]);
    $client = $clientStmt->fetch();
    $prefix = 'WN-' . strtoupper(substr($client['initials'], 0, 1));

    $countStmt = $pdo->prepare('SELECT COUNT(*) FROM machines WHERE client_id = ?');
    $countStmt->execute([$clientId]);
    $count = (int) $countStmt->fetchColumn() + 1;
    $newId = $prefix . sprintf('%03d', $count);

    try {
        $ins = $pdo->prepare('
            INSERT INTO machines (id, client_id, location, building, serial, mac_address, installed_at, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ');
        $ins->execute([
            $newId,
            $clientId,
            $body['location'],
            $body['building'] ?? '',
            $body['serial'],
            strtoupper($body['mac_address']),
            $body['installed_at'],
            $body['notes'] ?? null,
        ]);
    } catch (PDOException $e) {
        if ($e->getCode() === '23000') {
            jsonError('Serial number or MAC address already registered');
        }
        throw $e;
    }

    jsonOk(['id' => $newId, 'message' => 'Machine registered successfully'], 201);
}

jsonError('Method not allowed', 405);
