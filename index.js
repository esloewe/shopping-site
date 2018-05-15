const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const { hashPassword, checkPassword } = require("./hashPass");
const csrf = require("csurf");
const paypal = require("paypal-rest-sdk");
const {
    productData,
    getProductBySku,
    getUserCartDetails
} = require("./database");

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

// paypal.configure({
//     mode: "sandbox", //sandbox or live
//     client_id:
//         "Aesg4cJL6yKPXjrXrT_vS-tWqOM8LL1awyD2PvZ7DyxxyqijlC6a0R6bc8S3wo83PjnGnam0-JaeLSqS",
//     client_secret:
//         "EAzrzXUmEq1L_DMRnmOnytSqNAED_VCLpGDask54dH2UUJyG3sq3-mpIrDlZkp0wSmCBoRA6AFg9IDga"
// });

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

app.get("/product/:sku", (req, res) => {
    console.log(req.params.sku);
    getProductBySku(req.params.sku).then(results => {
        res.json({
            product: results
        });
    });
});

app.post("/checkout", (req, res) => {
    console.log("req body checkout ", req.body);
    if (!req.body) {
        res.json({
            success: false,
            error: "please provide all the info needed"
        });
    } else {
        getUserCartDetails(
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.telephone,
            req.body.address_1,
            req.body.house_number_address,
            req.body.address_2,
            req.body.postal_code,
            req.body.city,
            req.body.state,
            req.body.country,
            req.body.order_status
        ).then(() => {
            res.json({ success: true });
        });
    }
});

// post requests ---------------------------------------------------------------//

// app.post("/admin-auth", (req, res) => {
//     res.json({
//         res: true
//     });
// });
//
// app.post("/purchase", (req, res) => {
//     const create_payment_json = {
//         intent: "sale",
//         payer: {
//             payment_method: "paypal"
//         },
//         redirect_urls: {
//             return_url: "http://localhost:8080/success",
//             cancel_url: "http://localhost:8080/cancel"
//         },
//         transactions: [
//             {
//                 item_list: {
//                     items: [
//                         {
//                             name: "item",
//                             sku: "001",
//                             price: "25.00",
//                             currency: "EUR",
//                             quantity: 1
//                         }
//                     ]
//                 },
//                 amount: {
//                     currency: "EUR",
//                     total: "25.00"
//                 },
//                 description: "This is the payment description."
//             }
//         ]
//     };
//
//     paypal.payment.create(create_payment_json, function(error, payment) {
//         if (error) {
//             throw error;
//         } else {
//             console.log("Create Payment Response");
//             console.log(payment);
//             res.send("testing paypal payment");
//
//             for (let i = 0; i < payment.links.length; i++) {
//                 if (payment.links[i].rel === "approval_url") {
//                     res.redirect(payment.links[i].href);
//                 }
//             }
//         }
//     });
// });
//
// app.get("/success", (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentId = req.query.paymentId;
//
//     const execute_payment_json = {
//         payerId: "append to redirect url",
//         transactions: [
//             {
//                 amount: {
//                     currency: "EUR",
//                     total: "25.00"
//                 }
//             }
//         ]
//     };
//
//     paypal.payment.execute(paymentId, execute_payment_json, function(
//         error,
//         payment
//     ) {
//         if (error) {
//             console.log(error.response);
//             throw error;
//         } else {
//             console.log("Get Payment Response");
//             console.log(JSON.stringify(payment));
//             res.send("success");
//         }
//     });
// });
//
// app.get("/cancel", (req, res) => {
//     res.send("cancel");
// });

// ---------------------------------------------------------------//

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
