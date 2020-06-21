const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    });

    console.log(
        `Connected to the Mongo DB at: ${conn.connection.host}`.cyan.underline
            .bold
    );
};

module.exports = connectDB;
