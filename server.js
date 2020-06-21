const express = require("express");
const dotenv = require("dotenv");
const bootcames = require("./routes/bootcamps"); // files for routes
const morgan = require("morgan");
const connectDb = require("./config/db");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connecting to the database
connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcames);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});

// Handile unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close serve & exit process
    server.close(() => process.exit(1));
});
