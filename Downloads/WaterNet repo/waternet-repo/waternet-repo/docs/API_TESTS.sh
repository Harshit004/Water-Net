# WATERNET — API Test Examples
# Replace https://yourdomain.com with your actual domain.
# Run these with curl, Postman, or Insomnia.

BASE=https://yourdomain.com

# ─────────────────────────────────────────────
# 1. LOGIN — get JWT token
# ─────────────────────────────────────────────
curl -s -X POST "$BASE/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"client@google.com","password":"demo1234"}' | python3 -m json.tool

# Save the token:
# TOKEN="eyJ0eXAiOiJKV1Q..."


# ─────────────────────────────────────────────
# 2. LIST MACHINES (client scope)
# ─────────────────────────────────────────────
curl -s "$BASE/api/machines/index" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool


# ─────────────────────────────────────────────
# 3. SINGLE MACHINE
# ─────────────────────────────────────────────
curl -s "$BASE/api/machines/index?id=WN-G001" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool


# ─────────────────────────────────────────────
# 4. REGISTER NEW MACHINE
# ─────────────────────────────────────────────
curl -s -X POST "$BASE/api/machines/index" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "serial":       "WN-2024-TEST01",
    "mac_address":  "AA:BB:CC:DD:EE:FF",
    "location":     "Floor 4, Lobby",
    "building":     "HQ Gurugram",
    "installed_at": "2024-05-01",
    "notes":        "Near main reception"
  }' | python3 -m json.tool


# ─────────────────────────────────────────────
# 5. ANALYTICS — last 7 days
# ─────────────────────────────────────────────
curl -s "$BASE/api/analytics/index?range=7" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool

# Last 30 days:
curl -s "$BASE/api/analytics/index?range=30" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool


# ─────────────────────────────────────────────
# 6. ACTIVE ALERTS
# ─────────────────────────────────────────────
curl -s "$BASE/api/alerts/index" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool

# Include resolved:
curl -s "$BASE/api/alerts/index?all=1" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool


# ─────────────────────────────────────────────
# 7. RESOLVE ALERT
# ─────────────────────────────────────────────
curl -s -X PUT "$BASE/api/alerts/index?id=1" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool


# ─────────────────────────────────────────────
# 8. IOT SENSOR PUSH (simulates a dispenser)
# ─────────────────────────────────────────────
curl -s -X POST "$BASE/api/sensor/ingest" \
  -H "Content-Type: application/json" \
  -d '{
    "device_key":       "your-iot-device-secret-key-change-this",
    "machine_id":       "WN-G001",
    "temp_ambient":     23.4,
    "temp_hot":         85.2,
    "temp_cold":        8.1,
    "tds":              48,
    "ph":               7.2,
    "purified_liters":  3,
    "raw_liters":       4
  }' | python3 -m json.tool

# Test alert trigger (TDS above threshold of 75):
curl -s -X POST "$BASE/api/sensor/ingest" \
  -H "Content-Type: application/json" \
  -d '{
    "device_key":       "your-iot-device-secret-key-change-this",
    "machine_id":       "WN-G001",
    "temp_ambient":     27.9,
    "temp_hot":         89.0,
    "temp_cold":        9.8,
    "tds":              82,
    "ph":               6.6,
    "purified_liters":  1,
    "raw_liters":       2
  }' | python3 -m json.tool
