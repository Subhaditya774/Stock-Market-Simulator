-- 👤 Default test user
INSERT INTO user (username, password, wallet_balance) 
VALUES ('demo', '1234', 100000.00);

-- 💼 Optional sample portfolio entries for the demo user
-- You can skip these if you want a fresh start
INSERT INTO portfolio (stock_name, quantity, avg_price, user_id)
VALUES ('Reliance Industries', 5, 2500.00, 1);

INSERT INTO portfolio (stock_name, quantity, avg_price, user_id)
VALUES ('TCS', 2, 3600.00, 1);

-- 🧾 Optional transactions for history
INSERT INTO transaction (stock_name, type, quantity, price, time, user_id)
VALUES ('Reliance Industries', 'BUY', 5, 2500.00, NOW(), 1);

INSERT INTO transaction (stock_name, type, quantity, price, time, user_id)
VALUES ('TCS', 'BUY', 2, 3600.00, NOW(), 1);
