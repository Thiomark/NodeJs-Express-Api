const express = require("express");
const router = express.Router();

// Creating routes for our api
// The V1 is for incase we decide to change the api, without affect the old one

// We do not have to have a /api/v1/bootcamps/

router.get("/", function (req, res) {
    res.status(200).json({ success: true, message: "Getting all Bootcamps" });
});

// The :ID act like a varialble
router.get("/:id", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Getting Bootcamps ${req.params.id}`,
    });
});

router.post("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Adding Bootcamps`,
    });
});

router.put("/:id", function (req, res) {
    res.status(201).json({
        success: true,
        message: `updating Bootcamp ${req.params.id}`,
    });
});

router.delete("/:id", function (req, res) {
    res.status(200).json({
        success: true,
        message: `Deleting Bootcamp ${req.params.id}`,
    });
});

module.exports = router;
