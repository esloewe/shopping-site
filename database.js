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
