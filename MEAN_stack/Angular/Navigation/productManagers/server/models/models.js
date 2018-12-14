const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productdb');


const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: [4, 'Input a valid product name!'] },
    price: { type: Number, required: true, min: [1, 'Price must be included!']},
    url: String,
}, {timestamps: true });


module.exports =  mongoose.model("Product", ProductSchema);