-- WATERNET — MySQL Schema
-- Run this in cPanel → phpMyAdmin, or via SSH: mysql -u user -p waternet < schema.sql

SET FOREIGN_KEY_CHECKS = 0;

-- ─────────────────────────────────────────────────
--  CLIENTS (enterprise accounts)
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS clients (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(120)  NOT NULL,
    initials     VARCHAR(4)    NOT NULL,
    color        VARCHAR(10)   DEFAULT '#185FA5',
    plan         VARCHAR(30)   DEFAULT 'Enterprise',
    created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─────────────────────────────────────────────────
--  USERS (login accounts)
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    client_id    INT UNSIGNED  NULL,                         -- NULL = admin user
    name         VARCHAR(100)  NOT NULL,
    email        VARCHAR(180)  NOT NULL UNIQUE,
    password     VARCHAR(255)  NOT NULL,                     -- bcrypt hash
    role         ENUM('admin','client_admin','viewer') DEFAULT 'client_admin',
    last_login   TIMESTAMP     NULL,
    created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─────────────────────────────────────────────────
--  MACHINES (dispensers)
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS machines (
    id           VARCHAR(20)   PRIMARY KEY,                  -- e.g. WN-G001
    client_id    INT UNSIGNED  NOT NULL,
    location     VARCHAR(150)  NOT NULL,
    building     VARCHAR(100)  DEFAULT '',
    serial       VARCHAR(60)   NOT NULL UNIQUE,
    mac_address  VARCHAR(17)   NOT NULL UNIQUE,
    status       ENUM('online','warn','offline') DEFAULT 'offline',
    installed_at DATE          NOT NULL,
    notes        TEXT          NULL,
    created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─────────────────────────────────────────────────
--  SENSOR READINGS (IoT data from machines)
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS sensor_readings (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    machine_id      VARCHAR(20)   NOT NULL,
    temp_ambient    DECIMAL(5,2)  NULL,
    temp_hot        DECIMAL(5,2)  NULL,
    temp_cold       DECIMAL(5,2)  NULL,
    tds             SMALLINT      NULL,    -- ppm
    ph              DECIMAL(4,2)  NULL,
    purified_liters SMALLINT      NULL,    -- litres in this interval
    raw_liters      SMALLINT      NULL,
    recorded_at     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (machine_id) REFERENCES machines(id) ON DELETE CASCADE,
    INDEX idx_machine_time (machine_id, recorded_at),
    INDEX idx_recorded_at (recorded_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─────────────────────────────────────────────────
--  ALERTS
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS alerts (
    id           BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    machine_id   VARCHAR(20)   NOT NULL,
    client_id    INT UNSIGNED  NOT NULL,
    type         ENUM('tds','ph','offline','temperature','info') NOT NULL,
    severity     ENUM('critical','warning','info','ok') DEFAULT 'warning',
    message      TEXT          NOT NULL,
    resolved     TINYINT(1)    DEFAULT 0,
    resolved_at  TIMESTAMP     NULL,
    created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (machine_id) REFERENCES machines(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    INDEX idx_client_resolved (client_id, resolved)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─────────────────────────────────────────────────
--  ALERT THRESHOLDS (per-client overrides)
-- ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS alert_thresholds (
    id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    client_id        INT UNSIGNED NOT NULL UNIQUE,
    tds_max          SMALLINT     DEFAULT 75,
    ph_min           DECIMAL(4,2) DEFAULT 6.80,
    ph_max           DECIMAL(4,2) DEFAULT 7.50,
    temp_max         DECIMAL(5,2) DEFAULT 28.00,
    offline_after    SMALLINT     DEFAULT 10,  -- minutes
    low_purify_alert SMALLINT     DEFAULT 200, -- L/day
    updated_at       TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;

-- ─────────────────────────────────────────────────
--  SEED DATA (demo)
-- ─────────────────────────────────────────────────
INSERT IGNORE INTO clients (id,name,initials,color) VALUES
  (1,'Google Corp','GC','#185FA5'),
  (2,'Amazon India','AI','#BA7517'),
  (3,'Microsoft','MS','#1D9E75'),
  (4,'JPMorgan Chase','JP','#A32D2D');

-- Admin user (password: "admin1234" — change before production!)
INSERT IGNORE INTO users (id,client_id,name,email,password,role) VALUES
  (1,NULL,'Super Admin','admin@waternet.com','$2y$12$ExampleHashChangeThisXXXXXXXXXX','admin');

-- Client users (password: "demo1234")
INSERT IGNORE INTO users (client_id,name,email,password,role) VALUES
  (1,'Google Admin','client@google.com','$2y$12$ExampleHashChangeThisXXXXXXXXXX','client_admin'),
  (2,'Amazon Admin','client@amazon.com','$2y$12$ExampleHashChangeThisXXXXXXXXXX','client_admin'),
  (3,'Microsoft Admin','client@microsoft.com','$2y$12$ExampleHashChangeThisXXXXXXXXXX','client_admin'),
  (4,'JPMorgan Admin','client@jpmorgan.com','$2y$12$ExampleHashChangeThisXXXXXXXXXX','client_admin');

-- Default thresholds
INSERT IGNORE INTO alert_thresholds (client_id) VALUES (1),(2),(3),(4);
