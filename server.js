const express = require("express");
const dotenv = require("dotenv");
const bootcames = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Creating a middleware

const logger = (req, res, next) => {
    // This function will run on ever middleware that we created
    req.hello = "Hello World";
    console.log("milldeware ran");

    // We use next so that it know to go to the next middlewear
    next();
};

app.use(logger);
// Mount routers
app.use("/api/v1/bootcamps", bootcames);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});
