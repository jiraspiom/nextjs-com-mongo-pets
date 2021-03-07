import mongoose from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
const transactionSchema = new mongoose.Schema({
    TRANSID: {
        type: Number,
        required: true,
        unique:true
    },
    ACCOUNTID: {
        type: Number,
        required: true,
    },
    TOACCOUNTID: {
        type: Number,
        required: true,
    },
    PAYEEID: {
        type: Number,
        required: true,
    },
    TRANSCODE: {
        type: String,
        required: true,
    },
    TRANSAMOUNT: {
        type: Number,
        required: [true, 'cade o valor'],
    },
    STATUS: {
        type: String,
        required: true,
    },
    TRANSACTIONNUMBER: {
        type: String
    },
    NOTES: {
        type: String
    }, 
    CATEGID: {
        type: Number,
        required: true,
    }, 
    SUBCATEGID: {
        type: Number,
        required: true,
    }, 
    TRANSDATE: {
        type: String,
        required: true,
    },
    FOLLOWUPID: {
        type: Number,
        required: true
    },
    TOTRANSAMOUNT: {
        type: Number,
        required: true
    }

});

//Export the model
export default mongoose.models.Transactions || mongoose.model('Transactions', transactionSchema)