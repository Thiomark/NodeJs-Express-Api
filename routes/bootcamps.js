const express = require("express");
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcame,
} = require("../controllers/bootcamp"); // Using destructor to bring the routes methods

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamp);

router
    .route("/:id")
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcame);

module.exports = router;
