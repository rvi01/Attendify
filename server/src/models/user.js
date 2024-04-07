const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User",{
    email: {
        type: String,
        required : true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    selectBatch: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String,
        default: null
    },
});

module.exports = User;