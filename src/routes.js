const { Router } = require('express')
const routes = Router()
const { getProduct, getProductById, createProduct, deleteProduct, updateProduct } = require('./controllers/ProductController')

routes.get('/products', getProduct)
routes.get('/products/:id', getProductById)
routes.post('/products', createProduct)
routes.patch('/products/:id', updateProduct)
routes.delete('/products/:id', deleteProduct)

module.exports = routes