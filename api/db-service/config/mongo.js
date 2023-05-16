const mongoose = require('mongoose');


const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
    
    try {
        await mongoose.connect(DB_URI)
        console.log('**Successful connection to mongoDB**')
    } catch (error) {
        console.log('***Error of connection to mongoDB: ', error);
    }
};

module.exports = dbConnect;

