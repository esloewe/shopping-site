DROP TABLE IF EXISTS order_items;

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR (200),
    product_id VARCHAR (200),
    price DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);
