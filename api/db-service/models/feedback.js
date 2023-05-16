const mongoose = require('mongoose');

const FeedbackScheme = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        comment: {
            type: String,
            required: true,
        },
        photo: {
            type: Number,
        }
    },
    {
        timestamps:true, // createdAt, updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("feedback", FeedbackScheme)