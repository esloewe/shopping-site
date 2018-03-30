DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR (100) NOT NULL UNIQUE,
    upc VARCHAR (200),
    product_name VARCHAR (200) NOT NULL,
    product_description VARCHAR (500),
    product_image VARCHAR (300),
    price DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);
