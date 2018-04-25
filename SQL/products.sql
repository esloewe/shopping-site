-- DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR (100) NOT NULL UNIQUE,
    upc VARCHAR (200),
    category VARCHAR (200) NOT NULL,
    sub_category VARCHAR (200),
    product_name VARCHAR (200) NOT NULL,
    product_description VARCHAR (500),
    product_image_name VARCHAR (200),
    price DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);

INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JBR002', '3D Printed Black Bracelet', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/bracelet-black.jpg', 70.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JEA003', '3D Printed Black Earings', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/black-earings.jpg', 90.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JEA004', '3D Printed Red Earings + LED Light', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/pendant-red-earing.jpg', 95.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JEA005', '3D Printed Magenta Earings', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/magenta-earing.jpg', 140.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JBR001', '3D Printed Bracelet', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/bracelet.png', 100.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JEA006', '3D Printed Red Earing + LED Light', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/led-red-pendant-earing.jpg', 120.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JNE001', '3D Printed Necklace Gold', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/gold-necklace.png', 160.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JNE002', '3D Printed Necklace Geometric Shapes', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/necklace-shapes.png', 90.00, 'jewelry');
INSERT INTO products (sku, product_name, product_description, product_image_name, price, category) VALUES('JEA002', '3D Printed Earings + LED Light', 'Lorem ipsum dolor sit amet, vim nonumy ignota no. Per malis dictas sensibus ex. Vero comprehensam te his, nec denique recteque mediocrem no. Laudem delenit no duo, has ne habemus accusam consetetur.', '/product-images/earings-lights.png', 120.00, 'jewelry');
