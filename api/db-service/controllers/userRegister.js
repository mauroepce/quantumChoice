const users = require("../models/users");


const registerUserDB = async (req,res) => {
    try {
        
        const userData = req.body
        const userCreated = await users.create(userData)
        userCreated.set("password", undefined, {strict: false});
       
        res.status(201).send(userCreated)
    } catch (error) {
        console.error(`Error while saving "user" on DB: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
    }
}

module.exports = {
    registerUserDB
}