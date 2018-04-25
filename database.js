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
