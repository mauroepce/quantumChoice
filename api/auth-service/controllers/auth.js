const axios = require('axios');
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require('../utils/handlejwt');
const { compare } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { sendVerificationEmail } = require('../utils/emailNotification');

const USER_REGISTER_URL = process.env.USER_REGISTER_URL;
const CHECK_USER_EMAIL = process.env.CHECK_USER_EMAIL;
const STORE_VERIFICATION_CODE= process.env.STORE_VERIFICATION_CODE;

const authController = {

    /**
     *  Controller for registering a user
     * @param {*} req 
     * @param {*} res 
     */

    registerController: async (req, res) => {
        try {
            // Receive the user data
            const body = req.body
            console.log(body)
            const password = await encrypt(body.password);
            const newBody = { ...body, password };

            // Register the user on DB  
            const dataUser = await axios.post(USER_REGISTER_URL, newBody)

            const userData = dataUser.data; // access to data property
            
            // Create a property call "token" with a json web token value
            const data = {
                token: await tokenSign(userData),
                user: userData,
            };

            // Generate verification token
            const verificationToken = uuidv4();

            // Store verification token in registered-user through request to db-service
            const storeVerificationToken = await axios.post(STORE_VERIFICATION_CODE, {userId: userData._id, verificationToken})

            console.log(storeVerificationToken.data)
            // check if the token was stored
            const tokenStored = storeVerificationToken.data.tokenStored;

            // Send verification email  if the token was stored
            if(tokenStored) {
               await sendVerificationEmail(userData.email, userData.verificationToken);
            }          

            res.status(200).send({data})
        } catch (error) {

            console.error(`Error while registering the "user" on DB: ${error.message}`);
            const errorMessage = error.response.data.error;
            res.status(400).json({
                error: errorMessage
            });

        }
    },

    /**
     *  Controller for login a user
     * @param {*} req 
     * @param {*} res 
     */

    loginController: async (req, res) => {
        try {
           
            const email = {email: req.body.email}
       
            const password  = req.body.password

            // Check if user exist on DB
            const checkUser = await axios.post(CHECK_USER_EMAIL, email)
            // Isolate the data property
            const user = checkUser.data;
        
            
            // Response if user doesn't exist
            if(!user){
                return res.status(400).send({error: "There's no user with this email"});   
            }
            
            // Check if the user login password match with the DB
            const  passwordHashed = user.password;
            const check = await compare(password, passwordHashed)
          
            // Response if passwords doesn't match
            if(!check){
                return res.status(400).send({error: "The password doesn't match"}); 
            }

            // Set to "undefined" the password value
            delete user["password"]
        

            // Data object to respond if passwords match
            const data = {
                token: await tokenSign(user),
                user
            }
            
            res.status(200).send(data)

        } catch (error) {
            
            console.error(`Error while trying to log the user: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
        }
    }


}




module.exports =  authController;

