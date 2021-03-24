// Create a router from express
const express = require('express')
const router = express.Router()

// Get product controllers
const {
    getAllProducts,
    getProductById,
} = require('../controllers/productControllers')

/**
 *@desc     GET all products from database
 *@return   GET /api/products
 *@access   Public
 */
router.get('/', getAllProducts)

/**
 *@desc     GET a product by id
 *@return   GET /api/product/:id
 *@access   Public
 */
router.get('/:id', getProductById)

module.exports = router
