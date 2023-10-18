const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true
    },
    secondName:{
        type : String,
    },
    telegram: {
        type: String,
        required: true
    },
    btcWallet: {
        type: String,
        required: true
    },
    btc: {
        type: Number,
        required: true
    },
    rub:{
        type:Number
    }
})
mongoose.model('User',userSchema)