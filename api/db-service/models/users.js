const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            select: false
        },
        role:{
            type:['user', 'admin'],
            default: 'user'
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        verificationToken: {
            type: String
        }
    },
    {
        timestamps:true, // createdAt, updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("users", UserScheme)