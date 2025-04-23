import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true

    },

    name : {
        type : String,
        required : true
    },
    altName :{
        type : [String],
        default : []
        
    },

    price : {
        type : Number,
        required : true
    }, 

    labeledPrice : {
        type : Number,
        required : true
    },

    images : {
        type : [String],
        required : true,
        default : ["https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=600"]
    },

    description : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    
})
const Product = mongoose.model("products",productSchema);

export default Product