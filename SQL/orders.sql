DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (200),
    last_name VARCHAR (200),
    email VARCHAR (200),
    telephone VARCHAR (200),
    address_1 VARCHAR (200),
    address_2 VARCHAR (200),
    house_number_address VARCHAR (200),
    postal_code VARCHAR (200),
    city VARCHAR (200),
    state VARCHAR (200),
    country VARCHAR (200),
    order_status VARCHAR (200) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);
