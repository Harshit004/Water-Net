# WATERNET — Developer Handoff Checklist

Use this checklist to go from this zip to a live production deployment.

---

## Before You Touch Anything

- [ ] Read `README.md` fully
- [ ] Read `backend/config/database.php` — understand what needs changing
- [ ] Note: frontend is a **single HTML file** — no React, no npm, no build step needed

---

## Database

- [ ] Create MySQL database in cPanel: `youruser_waternet`
- [ ] Create MySQL user: `youruser_wn` with strong password
- [ ] Grant ALL PRIVILEGES
- [ ] Import `database/schema.sql` via phpMyAdmin
- [ ] Verify seed data imported (clients, users tables have rows)

---

## Backend Configuration

- [ ] Edit `backend/config/database.php`:
  - [ ] `DB_NAME` — exact cPanel database name (includes cPanel username prefix)
  - [ ] `DB_USER` — exact cPanel MySQL username
  - [ ] `DB_PASS` — strong password
  - [ ] `JWT_SECRET` — generate: `php -r "echo bin2hex(random_bytes(32));"`

- [ ] Edit `backend/config/helpers.php`:
  - [ ] `$allowedOrigins` — set to your actual domain(s)

- [ ] Edit `backend/api/sensor/ingest.php`:
  - [ ] `DEVICE_SECRET` — set to a strong random key; program same key into firmware

- [ ] Edit `frontend/api.js`:
  - [ ] `BASE_URL` — set to `https://yourdomain.com/api`

---

## Passwords

- [ ] Generate bcrypt hashes for all user passwords:
  ```
  php -r "echo password_hash('YourNewPassword', PASSWORD_BCRYPT, ['cost'=>12]);"
  ```
- [ ] Update hashes in database for all users (phpMyAdmin or SQL)
- [ ] Delete demo users or change their passwords

---

## File Upload (cPanel)

- [ ] Upload `frontend/index.html` → `public_html/index.html`
- [ ] Upload `frontend/api.js` → `public_html/api.js`
- [ ] Upload `backend/.htaccess` → `public_html/.htaccess`
- [ ] Upload `backend/config/` folder → `public_html/config/`
- [ ] Upload `backend/api/` folder → `public_html/api/`
- [ ] Do NOT upload `database/schema.sql` to public_html (import via phpMyAdmin only)
- [ ] Do NOT upload `README.md`, `.env.example`, `.gitignore` to public_html

---

## SSL & HTTPS

- [ ] Issue Let's Encrypt SSL certificate in cPanel → SSL/TLS
- [ ] Uncomment HTTPS redirect in `public_html/.htaccess`
- [ ] Test: `http://yourdomain.com` redirects to `https://`

---

## Connect Frontend to Backend

- [ ] Add `<script src="api.js"></script>` before `</body>` in `index.html`
- [ ] Replace demo `doLogin()` function at bottom of `index.html` with real version from `frontend/api.js` comments

---

## Test Each Endpoint

- [ ] `POST /api/auth/login` → returns token
- [ ] `GET /api/machines/index` (with Bearer token) → returns machines
- [ ] `GET /api/analytics/index?range=7` → returns chart data
- [ ] `GET /api/alerts/index` → returns alerts
- [ ] `POST /api/sensor/ingest` → returns `{"success":true,"data":{"recorded":true}}`

---

## PHP Settings (cPanel MultiPHP INI Editor)

- [ ] PHP version ≥ 8.1
- [ ] `display_errors = Off`
- [ ] `log_errors = On`
- [ ] `memory_limit = 128M`

---

## Security Checklist

- [ ] All demo passwords changed
- [ ] `JWT_SECRET` is 64+ random characters
- [ ] `DEVICE_SECRET` is strong and stored only in firmware + server
- [ ] `display_errors = Off` in production
- [ ] HTTPS is live
- [ ] `.htaccess` security headers active
- [ ] `database.php` is NOT accessible via browser (`.htaccess` blocks it)

---

## Go-Live

- [ ] Test login as Admin → verify admin console works
- [ ] Test login as each client → verify data isolation (each client sees only their machines)
- [ ] Test Register Machine form
- [ ] Test Analytics charts load (TDS, temperature, consumption)
- [ ] Test Alerts page
- [ ] Test Add Client in Admin → Client Management
- [ ] Send first test IoT payload from a dispenser or Postman
