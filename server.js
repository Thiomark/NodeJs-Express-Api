const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Creating routes for our api
// The V1 is for incase we decide to change the api, without affect the old one
app.get("/api/v1/bootcamps", function (req, res) {
    res.status(200).json({ success: true, message: "Getting all Bootcamps" });
});

// The :ID act like a varialble
app.get("/api/v1/bootcamps/:id", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Getting Bootcamps ${req.params.id}`,
    });
});

app.post("/api/v1/bootcamps/", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Adding Bootcamps`,
    });
});

app.put("/api/v1/bootcamps/:id", function (req, res) {
    res.status(201).json({
        success: true,
        message: `updating Bootcamp ${req.params.id}`,
    });
});

app.delete("/api/v1/bootcamps/:id", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Deleting Bootcamp ${req.params.id}`,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});
