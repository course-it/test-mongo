const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema (
    {
        name : {

        type : String }, 

        surname: 
        {
        type : String
        },
        age: {
        type : Number
        }


    }
)

module.exports =  mongoose.model('User', UserSchema)

