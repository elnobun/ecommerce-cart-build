const Product = require("../models/Product")

// Fetch All products
const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (e) {
        console.error(e)
        res.status(500).json({ message: "Server Error!"})
    }
}

// Fetch product by id
const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (e) {
        console.error(e)
        res.status(500).json({ message: "Server Error!"})
    }
}

module.exports = { getAllProducts, getProductById}
