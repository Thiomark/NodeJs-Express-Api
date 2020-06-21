const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", function (req, res) {
    //res.sendStatus(400)
    res.status(400).json({ success: false, data: "page does not exist" });
});

app.get("/names", function (req, res) {
    // res.send("<h1>Hello World</h1>");
    // res.json({name: "Itumeleng"});

    res.status(200).json({ success: true, name: "Itumeleng", id: 1 });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("The server has started on Port: " + PORT);
});
