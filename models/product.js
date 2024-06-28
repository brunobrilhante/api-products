const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false,
        default: 0.00
    }
})

module.exports = mongoose.model('Product', productsSchema)