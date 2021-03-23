// require the MONGODB_URI from the .env file
require("dotenv").config()
// Use mongoose
const mongoose = require("mongoose")

// Connect mongoose to database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connection Success")
    } catch (error) {
        console.error("Database Connection Failed!", error)
        process.exit(1)
    }
}

module.exports = connectDB
