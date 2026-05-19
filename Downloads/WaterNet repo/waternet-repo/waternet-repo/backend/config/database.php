<?php
/**
 * WATERNET — Database Configuration
 * For cPanel shared hosting (MySQL via PDO)
 *
 * Instructions:
 *  1. In cPanel → MySQL Databases, create a database: youruser_waternet
 *  2. Create a MySQL user and assign ALL PRIVILEGES
 *  3. Fill in the constants below
 */

define('DB_HOST', 'localhost');      // Almost always localhost on cPanel
define('DB_NAME', 'youruser_waternet'); // cPanel prefixes db names with your username
define('DB_USER', 'youruser_wn');       // Must match cPanel MySQL user
define('DB_PASS', 'YourStrongPassword123!');
define('DB_CHARSET', 'utf8mb4');

define('JWT_SECRET', 'change-this-to-a-random-64-char-string');
define('JWT_EXPIRY', 3600 * 24); // 24 hours

function getPDO(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    }
    return $pdo;
}
