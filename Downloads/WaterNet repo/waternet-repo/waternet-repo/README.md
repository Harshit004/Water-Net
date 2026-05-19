# WATERNET — IoT Water Dispenser Management Platform
### By The Circle of Blue

---

## Project Overview

WATERNET is a full-stack web application for enterprise IoT water dispenser monitoring.
It provides a **client portal**, an **admin console**, and a **marketing website** — all in a single deployable HTML file, backed by a PHP + MySQL REST API hosted on standard cPanel shared hosting.

---

## Repository Structure

```
waternet/
│
├── frontend/
│   ├── index.html          ← Complete single-file application (login, client portal,
│   │                          admin console, marketing pages)
│   └── api.js              ← JS API client — connects frontend to backend REST API
│
├── backend/
│   ├── .htaccess           ← Apache: routing, security headers, gzip, HTTPS redirect
│   ├── config/
│   │   ├── database.php    ← DB credentials + PDO connection (⚠ edit before deploy)
│   │   ├── auth.php        ← JWT helpers: jwtCreate(), jwtVerify(), requireAuth()
│   │   └── helpers.php     ← CORS, jsonOk(), jsonError(), getBody()
│   └── api/
│       ├── auth/
│       │   └── login.php       POST /api/auth/login
│       ├── machines/
│       │   └── index.php       GET|POST /api/machines
│       ├── sensor/
│       │   └── ingest.php      POST /api/sensor/ingest  ← called by IoT devices
│       ├── analytics/
│       │   └── index.php       GET /api/analytics
│       └── alerts/
│           └── index.php       GET|PUT /api/alerts
│
├── database/
│   └── schema.sql          ← MySQL schema + demo seed data (run once in phpMyAdmin)
│
├── docs/
│   └── (see below)
│
├── .env.example            ← Configuration template (copy → fill in → DO NOT commit)
├── .gitignore
└── README.md               ← This file
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS · Chart.js 4 · Font Awesome 6 · Google Fonts |
| Backend | PHP 8.1+ · PDO/MySQL · HS256 JWT (no Composer needed) |
| Database | MySQL 5.7+ / MariaDB 10.4+ |
| Hosting | Any cPanel shared host (Hostinger, GoDaddy, SiteGround, etc.) |
| IoT Broker | Direct HTTP POST from ESP32/NodeMCU over Wi-Fi |

---

## Features

### Client Portal (per enterprise client, data-isolated)
- **Dashboard** — live sensor cards (TDS, pH, temp) updating every 2 seconds
- **My Machines** — searchable table of all dispensers with colour-coded status
- **Register Machine** — onboard new dispenser by serial + MAC address
- **Analytics** — weekly charts: purified vs raw water · TDS trend (avg + peak) · Hot / Cold / Ambient temperature
- **Alerts** — prioritised event feed for TDS exceedances, pH drops, offline machines
- **Settings** — alert thresholds, account details, notification preferences

### Admin Console
- **Overview** — fleet-wide KPIs across all clients
- **Client Management** — add/remove enterprise clients with colour badge picker
- **All Machines** — every dispenser across all clients in one searchable table
- **System Alerts** — resolve alerts for any client
- **User Accounts** — manage logins and roles
- **System Settings** — global default thresholds

### Marketing Pages
- Features · About · Contact

---

## Deployment Guide (cPanel)

### Step 1 — Create the MySQL Database

1. Log in to cPanel → **MySQL Databases**
2. Create database: `youruser_waternet`
3. Create user `youruser_wn` with a strong password
4. Grant **ALL PRIVILEGES** to the user on the database
5. Open **phpMyAdmin** → select the database → **Import** → upload `database/schema.sql`

### Step 2 — Configure Credentials

Edit `backend/config/database.php`:

```php
define('DB_NAME', 'youruser_waternet');  // exact cPanel database name
define('DB_USER', 'youruser_wn');
define('DB_PASS', 'YourStrongPassword123!');
define('JWT_SECRET', 'generate-64-random-chars');  // run: php -r "echo bin2hex(random_bytes(32));"
```

Edit `backend/config/helpers.php` — set your domain:
```php
$allowedOrigins = ['https://yourdomain.com'];
```

Edit `frontend/api.js` — set your domain:
```js
const BASE_URL = 'https://yourdomain.com/api';
```

Edit `backend/api/sensor/ingest.php` — set IoT device secret:
```php
define('DEVICE_SECRET', 'your-iot-device-secret-key');
```

### Step 3 — Hash Passwords

Run in cPanel Terminal or local PHP CLI:

```bash
php -r "echo password_hash('admin1234', PASSWORD_BCRYPT, ['cost'=>12]);"
php -r "echo password_hash('demo1234',  PASSWORD_BCRYPT, ['cost'=>12]);"
```

Update `database/schema.sql` with the real hashes before importing, or run SQL directly:

```sql
UPDATE users SET password='$2y$12$...' WHERE email='admin@waternet.com';
UPDATE users SET password='$2y$12$...' WHERE email='client@google.com';
-- repeat for each user
```

### Step 4 — Upload Files

Upload to `public_html/` via cPanel File Manager or FTP:

```
public_html/
├── index.html              ← from frontend/
├── api.js                  ← from frontend/  (add <script src="api.js"> to index.html)
├── .htaccess               ← from backend/
├── config/
│   ├── database.php
│   ├── auth.php
│   └── helpers.php
└── api/
    ├── auth/login.php
    ├── machines/index.php
    ├── sensor/ingest.php
    ├── analytics/index.php
    └── alerts/index.php
```

### Step 5 — Enable HTTPS

1. cPanel → **SSL/TLS** → Let's Encrypt → Issue free certificate
2. In `backend/.htaccess`, uncomment the HTTPS redirect block

### Step 6 — Connect Frontend to Real Backend

In `frontend/index.html`, add before `</body>`:
```html
<script src="api.js"></script>
```

Then replace the demo `doLogin()` function with the real version shown at the bottom of `frontend/api.js`.

---

## API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/login` | None | Returns JWT + user/client info |
| GET | `/api/machines/index` | JWT | List all machines for client |
| GET | `/api/machines/index?id=WN-G001` | JWT | Single machine + latest reading |
| POST | `/api/machines/index` | JWT | Register new machine |
| GET | `/api/analytics/index?range=7` | JWT | Aggregated daily analytics |
| GET | `/api/alerts/index` | JWT | Active alerts |
| PUT | `/api/alerts/index?id=42` | JWT | Resolve alert |
| POST | `/api/sensor/ingest` | Device key | Receive IoT sensor push |

All endpoints return:
```json
{ "success": true,  "data": { ... } }
{ "success": false, "error": "message" }
```

---

## IoT Device Integration (ESP32 / NodeMCU)

Each dispenser should POST every 30 seconds:

```
POST https://yourdomain.com/api/sensor/ingest
Content-Type: application/json

{
  "device_key":       "your-iot-device-secret-key",
  "machine_id":       "WN-G001",
  "temp_ambient":     23.4,
  "temp_hot":         85.2,
  "temp_cold":        8.1,
  "tds":              48,
  "ph":               7.2,
  "purified_liters":  3,
  "raw_liters":       4
}
```

Alerts are auto-generated server-side when values exceed per-client thresholds.

---

## cPanel PHP Settings

In cPanel → **MultiPHP INI Editor**:

```ini
php_version        = 8.1 (or higher)
max_execution_time = 30
memory_limit       = 128M
display_errors     = Off
log_errors         = On
```

---

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@waternet.com | admin1234 |
| Google Corp | client@google.com | demo1234 |
| Amazon India | client@amazon.com | demo1234 |
| Microsoft | client@microsoft.com | demo1234 |
| JPMorgan Chase | client@jpmorgan.com | demo1234 |

> ⚠ Change all passwords before going live.

---

## Contact / Handoff

**Project:** WATERNET — The Circle of Blue
**Frontend file:** `frontend/index.html` (self-contained, no build step)
**Backend language:** PHP 8.1+, no Composer, no framework
**Database:** MySQL — single schema file at `database/schema.sql`
**Hosting requirement:** Any cPanel host with PHP 8.1+ and MySQL 5.7+

For questions about this codebase, refer to the inline comments in each file.
