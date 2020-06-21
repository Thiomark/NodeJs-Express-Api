const Bootcamp = require("../models/Bootcamp");
// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Getting all Bootcamps",
        // The middleware
        // hello: req.hello,
    });
};

// @desc        get a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Get Bootcamp ${req.params.id}`,
    });
};

// @desc        adding a bootcamp
// @route       POST /api/v1/bootcamps/
// @access      public

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};

// @desc        updating a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      public

exports.updateBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        message: `updating Bootcamp ${req.params.id}`,
    });
};

// @desc        deleting a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      public

exports.deleteBootcame = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Deleting Bootcamp ${req.params.id}`,
    });
};
