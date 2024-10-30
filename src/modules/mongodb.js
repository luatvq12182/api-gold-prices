require("dotenv").config();
const mongoose = require("mongoose");
// Database connection
mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
