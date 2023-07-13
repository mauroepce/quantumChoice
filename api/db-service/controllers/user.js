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

/**
 * Store the verification token on DB of the user
 * @param {*} req 
 * @param {*} res 
 */

const storeVerificationToken = async (req, res) => {
    try {
      // Destructuring the data from the request body
      const { userId, verificationToken } = req.body;
      
      // Store the verification token in the DB
      const storeVerificationTokenData = await users.findByIdAndUpdate(
        userId,
        { verificationToken }
      );
  
      res.status(200).send({storeVerificationTokenData, tokenStored: true});
    } catch (error) {
      console.error(`Error while storing the verification token in the "users" collection: ${error.message}`);
      res.status(500).json({
        error: {
          message: error,
        },
      });
    }
  };

const verifyUserController = async (req, res) => {
    try {
        // Destruction the data from the request body
        const {token} = req.body;
        
        // Find the user with the verification token
        const user = await users.findOne({verificationToken: token});

        // If the user is not found
        if(!user) {
            return res.status(404).send({error: "The user does not exist"});
        }

        // If the user is found, verify the user
        user.isVerified = true;

        // Save the user
        await user.save();

        res.status(200).send({message: "The user has been verified"});

    } catch (error) {
        
    }
}


module.exports = {
    registerUserDB,
    storeVerificationToken,
    verifyUserController
}