const users = require("../models/users");
const { storeVerificationToken } = require("../utils/verificationToken");

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

        // Generate verification token
        const verificationToken = uuidv4();
        
        // store the verification token on DB
        await storeVerificationToken(userCreated._id, verificationToken);       
       
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
    registerUserDB,

}