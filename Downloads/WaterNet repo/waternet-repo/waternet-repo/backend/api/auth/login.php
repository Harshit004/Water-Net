<?php
/**
 * WATERNET — Auth API
 * POST /api/auth/login.php
 * POST /api/auth/refresh.php  (same file, action param)
 *
 * Deploy to: public_html/api/auth/login.php
 */

require_once __DIR__ . '/../../config/helpers.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../config/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonError('Method not allowed', 405);

$body = getBody();
$email    = trim($body['email'] ?? '');
$password = $body['password'] ?? '';

if (!$email || !$password) jsonError('Email and password are required');

$pdo  = getPDO();
$stmt = $pdo->prepare('SELECT id, client_id, name, email, password, role FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password'])) {
    jsonError('Invalid credentials', 401);
}

// Update last login
$pdo->prepare('UPDATE users SET last_login = NOW() WHERE id = ?')->execute([$user['id']]);

// Build payload — include client_id so the frontend knows which client to load
$payload = [
    'sub'       => $user['id'],
    'email'     => $user['email'],
    'name'      => $user['name'],
    'role'      => $user['role'],
    'client_id' => $user['client_id'],
];

$token = jwtCreate($payload);

// Fetch client data if client user
$clientData = null;
if ($user['client_id']) {
    $cs = $pdo->prepare('SELECT id, name, initials, color FROM clients WHERE id = ?');
    $cs->execute([$user['client_id']]);
    $clientData = $cs->fetch();
}

jsonOk([
    'token'  => $token,
    'user'   => [
        'id'        => $user['id'],
        'name'      => $user['name'],
        'email'     => $user['email'],
        'role'      => $user['role'],
        'client_id' => $user['client_id'],
    ],
    'client' => $clientData,
]);
