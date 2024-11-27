import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true   //should provide name, if not errors
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true  // has createdAt, updatedAt on each document
});

const Product = mongoose.model('Product', productSchema); //Product, capital first letter and singular as mongodb will look as products

export default Product;