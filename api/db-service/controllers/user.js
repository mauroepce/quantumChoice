const users = require("../models/users");

/**
 * Register a user on the DB
 * @param {*} req 
 * @param {*} res 
 */

const registerUserDB = async (req,res) => {
    try {
        const { email } = req.body;

        // Verify if the email is already registered
        const existingUser = await users.findOne({email});

        if (existingUser !== null){
            return res.status(400).send({error: "This email already contains a registered account"});
        }

        const userData = req.body;
        const userCreated = await users.create(userData);
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

const storeVerificationToken = async (req, res) => {
    try {
        // destructuring the data from the request body
        const { userId, verificationToken } = req.body;

        // Store the verification token on DB
        const storeVerificationTokenData = await users.findByIdAndUpdate(userId, {verificationToken});

        res.status(200).send(storeVerificationTokenData);
    } catch (error) {
        console.error(`Error while storing the verification token "user" on DB: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
    }
}



module.exports = {
    registerUserDB,
    storeVerificationToken
}