const knox = require("knox");
const fs = require("fs");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // secrets.json is in .gitignore
}
const client = knox.createClient({
    key: secrets.AWS_KEY,
    secret: secrets.AWS_SECRET,
    bucket: "shopping-site-esloewe"
});

function upload(req, res, next) {
    console.log("running upload", req.file);
    if (!req.file) {
        console.log("no file detected inside upload");
        res.sendStatus(500);
        return;
    }
    const s3Request = client.put(req.file.filename, {
        "Content-Type": req.file.mimetype,
        "Content-Length": req.file.size,
        "x-amz-acl": "public-read"
    });
    console.log("whe are about to do stuff");

    const readStream = fs.createReadStream(req.file.path);
    readStream.pipe(s3Request);

    s3Request.on("response", s3Response => {
        const wasSuccessful = s3Response.statusCode == 200;
        console.log(
            "succesfully uploaded an image to s3",
            wasSuccessful,
            req.file
        );
        if (wasSuccessful) {
            fs.unlink(req.file.path, () => {});
            next();
        } else {
            console.log(s3Response.statusCode);
            res.sendStatus(500);
        }
    });
}

exports.upload = upload;
// for calling in the middleware we add this as s3.upload
