require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productsRouter = require('./routes/products')

mongoose.connect(process.env.DATABASE_STRING)
const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log('Database Connected'))

app.use(express.json())
app.use('/products', productsRouter)

app.listen(3000, ()=> console.log('Running on http://localhost:3000'))