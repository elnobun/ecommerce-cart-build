require("dotenv").config()
const express = require('express')
const connectDB = require("./config/db")
const productRoutes = require("../server/routes/productRoutes")

// Connect to the database
connectDB()

// Define an instance of express
const app = express()

// Allow express to have access to json body
app.use(express.json())

// Define the product routes
app.use("/api/products", productRoutes)

// Application should listen on a port 5000
const PORT = process.env.port || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
