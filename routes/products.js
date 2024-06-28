const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const product = require('../models/product')

router.get('/', async (req, res)=>{
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id', getProduct, (req, res)=>{
    res.json(res.product)
})

router.post('/', async (req, res)=>{
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        value: req.body.value,
        discount: req.body.discount
    })
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})

router.patch('/:id', getProduct, async (req, res)=>{
    if(req.body.name != null) {
        res.product.name = req.body.name
    }
    if(req.body.description != null) {
        res.product.description = req.body.description
    }
    if(req.body.value != null) {
        res.product.value = req.body.value
    }
    try {
       const updatedProduct = await res.product.save() 
       res.json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', getProduct, async (req, res)=>{
    try {
        await res.product.deleteOne()
        res.json({message: 'product was deleted'})
    } catch (error) {
        res.json({message: error.message})
    }
})

async function getProduct(req, res, next){
   try {
        Findedproduct = await Product.findById(req.params.id)
        if(Findedproduct == null) {
            return res.status(404).json({message: 'product not found'})
        }
   } catch (error) {
        return res.status(500).json({message: error.message})
   } 
   res.product = Findedproduct
   next()
}

module.exports = router