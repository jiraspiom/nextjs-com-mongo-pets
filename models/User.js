import mongoose from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
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
    password:{
        type:String,
        min: 6,
        max: 12,
        required:true,
    },
});

//Export the model
export default mongoose.models.User || mongoose.model('User', PetSchema)