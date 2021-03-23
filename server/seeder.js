// Require the dotenv config
require("dotenv").config()
// Import the product data from data
const productsData = require("./data/products")
// Get the database
const connectDB = require("./config/db")
// Get the product model
const Product = require("./models/Product")

// Run the database first to connect to mongo DB instance
connectDB()

// Create a function that will first delete what is in the database,
// and import the new data
const importData = async() => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData)
        console.log("Data imported!")
        process.exit()
    } catch (e) {
        console.error("Data import failed!")
        process.exit(1)
    }
}

// Call the function immediately its run
importData()

