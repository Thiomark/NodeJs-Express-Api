const express = require("express");
const dotenv = require("dotenv");
const bootcames = require("./routes/bootcamps"); // files for routes
const morgan = require("morgan");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcames);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});
