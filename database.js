const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/shopping-site"
);

exports.productData = function() {
    return db
        .query(
            `SELECT *
            FROM products
            `
        )
        .then(results => {
            return results.rows;
        })
        .catch(error => {
            console.log(error);
        });
};

exports.getProductBySku = function(sku) {
    return db
        .query(
            `SELECT *
            FROM products
            WHERE sku = $1`,
            [sku]
        )
        .then(results => {
            console.log("results in db", results);
            return results.rows[0];
        })
        .catch(error => {
            console.log(error);
        });
};

exports.adminAuth = function(username) {
    return db
        .query(
            `SELECT password_hash
                    FROM users_data
                    WHERE email = $1`,
            [username]
        )
        .then(results => {
            return results.rows[0].password_hash;
        })
        .catch(error => {
            console.log(error);
        });
};

exports.getUserCartDetails = function(
    first_name,
    last_name,
    email,
    telephone,
    address_1,
    house_number_address,
    address_2,
    postal_code,
    city,
    state,
    country,
    order_status
) {
    return db
        .query(
            `INSERT INTO orders (first_name, last_name, email, telephone,
        address_1, house_number_address, address_2, postal_code, city, state, country, order_status)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`,
            [
                first_name,
                last_name,
                email,
                telephone,
                address_1,
                house_number_address,
                address_2,
                postal_code,
                city,
                state,
                country,
                order_status
            ]
        )
        .then(results => {
            return results.rows[0].id;
        })
        .catch(error => {
            console.log(error);
        });
};
