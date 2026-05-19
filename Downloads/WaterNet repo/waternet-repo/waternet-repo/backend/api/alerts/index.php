<?php
/**
 * WATERNET — Alerts API
 *
 * GET    /api/alerts/index.php           → list unresolved alerts for client
 * GET    /api/alerts/index.php?all=1     → include resolved
 * PUT    /api/alerts/index.php?id=42     → resolve alert
 *
 * Deploy to: public_html/api/alerts/index.php
 */

require_once __DIR__ . '/../../config/helpers.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../config/auth.php';

$auth = requireAuth();
$pdo  = getPDO();

$clientId = $auth['role'] === 'admin' && isset($_GET['client_id'])
    ? (int)$_GET['client_id']
    : (int)($auth['client_id'] ?? 0);

if (!$clientId && $auth['role'] !== 'admin') jsonError('No client scope', 400);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $includeResolved = isset($_GET['all']) && $_GET['all'] === '1';
    $resolvedClause  = $includeResolved ? '' : 'AND a.resolved = 0';

    // Admin without client_id gets all alerts
    $clientClause = $clientId ? 'AND a.client_id = :client_id' : '';

    $stmt = $pdo->prepare("
        SELECT a.*, m.location AS machine_location
        FROM alerts a
        JOIN machines m ON m.id = a.machine_id
        WHERE 1=1 $clientClause $resolvedClause
        ORDER BY a.created_at DESC
        LIMIT 100
    ");
    if ($clientId) $stmt->bindValue(':client_id', $clientId, PDO::PARAM_INT);
    $stmt->execute();
    jsonOk($stmt->fetchAll());
}

if ($method === 'PUT' && isset($_GET['id'])) {
    $alertId = (int)$_GET['id'];
    // Verify the alert belongs to this client (or admin)
    $check = $pdo->prepare('SELECT id FROM alerts WHERE id = ? AND (client_id = ? OR ? = 0)');
    $check->execute([$alertId, $clientId, $clientId]);
    if (!$check->fetch()) jsonError('Alert not found', 404);

    $pdo->prepare('UPDATE alerts SET resolved = 1, resolved_at = NOW() WHERE id = ?')
        ->execute([$alertId]);
    jsonOk(['resolved' => true]);
}

jsonError('Method not allowed', 405);
