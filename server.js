const express = require("express");
const dotenv = require("dotenv");
const bootcames = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Creating a middleware

const logger = (req, res, next) => {
    console.log(
        `${req.method}, ${req.protocol}://${req.get("host")} ${req.originalUrl}`
    );
    next();
};

app.use(logger);
// Mount routers
app.use("/api/v1/bootcamps", bootcames);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});
