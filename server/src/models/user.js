const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User",{
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
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
    rememberMe: {
        type: String,
        trim: true,
    },
    isStudent: {
        type: String,
        default: null
    },
    isInstructor: {
        type: String,
        default: null
    },
    isVerified: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: null
    },
});

module.exports = User;
