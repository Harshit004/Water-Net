<?php
/**
 * WATERNET — Lightweight JWT helper (no composer dependency)
 * Uses HS256 signing — safe for cPanel shared hosting.
 */

require_once __DIR__ . '/database.php';

function base64url_encode(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64url_decode(string $data): string {
    return base64_decode(strtr($data, '-_', '+/') . str_repeat('=', (4 - strlen($data) % 4) % 4));
}

function jwtCreate(array $payload): string {
    $header  = base64url_encode(json_encode(['alg'=>'HS256','typ'=>'JWT']));
    $payload['iat'] = time();
    $payload['exp'] = time() + JWT_EXPIRY;
    $body    = base64url_encode(json_encode($payload));
    $sig     = base64url_encode(hash_hmac('sha256', "$header.$body", JWT_SECRET, true));
    return "$header.$body.$sig";
}

function jwtVerify(string $token): ?array {
    $parts = explode('.', $token);
    if (count($parts) !== 3) return null;
    [$header, $body, $sig] = $parts;
    $expected = base64url_encode(hash_hmac('sha256', "$header.$body", JWT_SECRET, true));
    if (!hash_equals($expected, $sig)) return null;
    $payload = json_decode(base64url_decode($body), true);
    if (!$payload || $payload['exp'] < time()) return null;
    return $payload;
}

/** Extract and verify Bearer token from Authorization header */
function requireAuth(): array {
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if (!preg_match('/Bearer\s+(.+)/i', $auth, $m)) {
        http_response_code(401);
        exit(json_encode(['error' => 'Unauthorised']));
    }
    $payload = jwtVerify($m[1]);
    if (!$payload) {
        http_response_code(401);
        exit(json_encode(['error' => 'Token expired or invalid']));
    }
    return $payload;
}

/** Require admin role */
function requireAdmin(): array {
    $payload = requireAuth();
    if ($payload['role'] !== 'admin') {
        http_response_code(403);
        exit(json_encode(['error' => 'Admin access required']));
    }
    return $payload;
}
