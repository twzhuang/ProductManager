const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"], minlength: [4, "Title must have at least 3 characters"]},
    price: {type: String, required: [true, "Price is required"]},
    imageurl: String
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
const Product = mongoose.model('Product');
