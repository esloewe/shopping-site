CREATE TABLE adminLogin (
    id SERIAL PRIMARY KEY,
    username VARCHAR (200) NOT NULL UNIQUE,
    password_hash VARCHAR (200) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);
