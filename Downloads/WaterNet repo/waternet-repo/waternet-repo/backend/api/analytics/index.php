<?php
/**
 * WATERNET — Analytics API
 *
 * GET /api/analytics/index.php?range=7     → last 7 days (default)
 * GET /api/analytics/index.php?range=30    → last 30 days
 * GET /api/analytics/index.php?machine=WN-G001 → single machine (last 7 days)
 *
 * Returns aggregated daily data:
 *  - purified/raw litres per day
 *  - avg/max TDS per day
 *  - avg temp_hot / temp_cold / temp_ambient per day
 *  - avg pH per day
 *
 * Deploy to: public_html/api/analytics/index.php
 */

require_once __DIR__ . '/../../config/helpers.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../config/auth.php';

$auth = requireAuth();
$pdo  = getPDO();

$clientId  = (int)($auth['client_id'] ?? 0);
$range     = min(90, max(1, (int)($_GET['range'] ?? 7)));
$machineId = $_GET['machine'] ?? null;

// Admins can pass any client_id
if ($auth['role'] === 'admin' && isset($_GET['client_id'])) {
    $clientId = (int)$_GET['client_id'];
}

if (!$clientId) jsonError('No client scope', 400);

// Build WHERE clause
$where = 'm.client_id = :client_id AND sr.recorded_at >= DATE_SUB(CURDATE(), INTERVAL :range DAY)';
$params = [':client_id' => $clientId, ':range' => $range];

if ($machineId) {
    $where .= ' AND m.id = :machine_id';
    $params[':machine_id'] = $machineId;
}

$sql = "
    SELECT
        DATE(sr.recorded_at)          AS day,
        SUM(sr.purified_liters)       AS purified,
        SUM(sr.raw_liters)            AS raw,
        ROUND(AVG(sr.tds), 1)        AS avg_tds,
        MAX(sr.tds)                   AS max_tds,
        ROUND(AVG(sr.ph), 2)         AS avg_ph,
        ROUND(AVG(sr.temp_hot), 1)   AS avg_temp_hot,
        ROUND(AVG(sr.temp_cold), 1)  AS avg_temp_cold,
        ROUND(AVG(sr.temp_ambient),1) AS avg_temp_ambient
    FROM sensor_readings sr
    JOIN machines m ON m.id = sr.machine_id
    WHERE $where
    GROUP BY DATE(sr.recorded_at)
    ORDER BY day ASC
";

$stmt = $pdo->prepare($sql);
foreach ($params as $k => $v) {
    $stmt->bindValue($k, $v, is_int($v) ? PDO::PARAM_INT : PDO::PARAM_STR);
}
$stmt->execute();
$rows = $stmt->fetchAll();

// Also return summary totals
$total = [
    'purified'        => array_sum(array_column($rows, 'purified')),
    'raw'             => array_sum(array_column($rows, 'raw')),
    'avg_tds'         => $rows ? round(array_sum(array_column($rows, 'avg_tds')) / count($rows), 1) : null,
    'max_tds'         => $rows ? max(array_column($rows, 'max_tds')) : null,
    'avg_temp_hot'    => $rows ? round(array_sum(array_column($rows, 'avg_temp_hot')) / count($rows), 1) : null,
    'avg_temp_cold'   => $rows ? round(array_sum(array_column($rows, 'avg_temp_cold')) / count($rows), 1) : null,
    'avg_temp_ambient'=> $rows ? round(array_sum(array_column($rows, 'avg_temp_ambient')) / count($rows), 1) : null,
    'efficiency_pct'  => ($rows && array_sum(array_column($rows,'raw')) > 0)
        ? round(array_sum(array_column($rows,'purified')) / array_sum(array_column($rows,'raw')) * 100, 1)
        : null,
];

jsonOk(['range_days' => $range, 'daily' => $rows, 'totals' => $total]);
