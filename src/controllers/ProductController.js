const Product = require('../models/product')

async function getProduct(req, res) {
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function getProductById(req, res) {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

async function createProduct(req, res) {
    try {
        const product = req.body
        const newProduct = await Product.create(product)
        return res.status(201).json(newProduct)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function updateProduct(req, res) {
    try {
        const id = req.params.id
        const product = req.body
        const updatedProduct = await Product.findByIdAndUpdate(id, product)
        return res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json({message: error.status})
    }
}

async function deleteProduct(req, res) {
    try {
        const id = req.params.id
        await Product.findByIdAndDelete(id)
        return res.status(200).json({message: 'Product was deleted'}) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { getProduct, getProductById, createProduct, deleteProduct, updateProduct }