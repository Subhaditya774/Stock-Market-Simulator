-- Drop tables if they already exist (optional for development)
DROP TABLE IF EXISTS transaction;
DROP TABLE IF EXISTS portfolio;
DROP TABLE IF EXISTS user;

-- 👤 USER TABLE
CREATE TABLE user (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    wallet_balance DECIMAL(15,2) DEFAULT 0.00
);

-- 💼 PORTFOLIO TABLE
CREATE TABLE portfolio (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    stock_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    avg_price DECIMAL(15,2) NOT NULL,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- 🧾 TRANSACTION TABLE
CREATE TABLE transaction (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    stock_name VARCHAR(100) NOT NULL,
    type VARCHAR(10) NOT NULL, -- BUY or SELL
    quantity INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
