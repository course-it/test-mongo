const mongoose = require ('mongoose')

const ProductSchema = mongoose.Schema (
    {
        Name: {
            type : String
        },
        Price :{
            type: Number
        },
        Discount: {
            type: Number
        },
        Image: {
            type: String
        },
        Category: {
            type: String
        },
        EnvioGratis: {
            type: Boolean
        },
        Stock : {
            type : Number
        },
        Descripton : {
            type : String
        },
        RelatedProduct: [],
        Datead: {
            type: Date
        }, 
        DateUpdate : {
            type: Date
        }
    }
)

module.exports = mongoose.model ('Products' , ProductSchema)