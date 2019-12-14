// Define the table stracture for MongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    product_Name:{
        type: String
    },
    product_Description: {
        type: String
    },
    product_SKU: {
        type: Number
    }    
});

module.exports = mongoose.model('Product', Product, 'Product')