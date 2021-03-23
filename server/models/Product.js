// Import mongoose schema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create new instance of the schema for products
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product
