// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Getting all Bootcamps",
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

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Create a Bootcamp`,
    });
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
