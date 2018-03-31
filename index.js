const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const { hashPassword, checkPassword } = require("./hashPass");
const csrf = require("csurf");
const { productData, getProductBySku } = require("./database");

// middleware ----------------------------------------------------------------//
app.use(express.static("./public"));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
const cookieSessionMiddleware = cookieSession({
    secret: process.env.SECRET || require("./secrets.json").secret,
    maxAge: 1000 * 60 * 60 * 24 * 14
});
app.use(cookieSessionMiddleware);
app.use(csrf());
app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

// get requests ----------------------------------------------------------------//

app.get("/product-list", (req, res) => {
    productData().then(results => {
        res.json({
            productList: results
        });
    });
});

app.get("/product-list/:sku", (req, res) => {
    const sku = req.params.sku;
    getProductBySku(sku).then(results => {
        res.json({
            productInfo: results
        });
    });
});

// post requests ---------------------------------------------------------------//

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
