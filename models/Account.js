import mongoose from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
const accountSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique:true
    },
    NAME: {
        type: String,
        required: true
    },
    INITIAL_BALANCE: {
        type: Number,
        required: true
    },
    TYPE: {
        type: String,
        required: true,
    },
    CURRENCY_SYMBOL: {
        type: String,
        required: true
    }
});

//Export the model
export default mongoose.models.Accounts || mongoose.model('Accounts', accountSchema)