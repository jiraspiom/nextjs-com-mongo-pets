import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
const CartaoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
export default mongoose.models.Cartao || mongoose.model('Cartao', CartaoSchema)