const axios = require('axios');
const { matchedData } = require("express-validator");

const USER_REGISTER_URL = process.env.USER_REGISTER_URL;
const USER_LOGIN_URL = process.env.USER_LOGIN_URL;
const VERIFY_USER_URL = process.env.VERIFY_USER_URL;


const authController = {

    /**
     *  Controller for registering a user
     * @param {*} req 
     * @param {*} res 
     */

    registerController: async (req, res) => {
        try {
            // Receive the user data
            req = matchedData(req);
            
            // Register user requesting to auth-service
            const dataUser = await axios.post(USER_REGISTER_URL, req)

            const userData = dataUser.data; // access to data property

            res.status(200).send(userData)
        } catch (error) {

            console.error(`Error while trying to make register-user request to auth-service: ${error.message}`);
            const errorMessage = error.response.data.error
            console.log(errorMessage)
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
           
            // Receive the user data
            req = matchedData(req);
            
            // Login the user through Auth
            const loginUser = await axios.post(USER_LOGIN_URL, req)

            // Isolate the data property
            const user = loginUser.data;
            
            res.status(200).send(user)

        } catch (error) {
            
            console.error(`Error while trying to make login-user request to auth-service: ${error.message}`);
            const errorMessage = error.response.data.error
            console.log(errorMessage)
            res.status(400).json({
                error: errorMessage
            });
        }
    },

    /**
     * Controller for verify a user from email using verification token
     * @param {*} req 
     * @param {*} res 
     */

    verifyUserController: async (req, res) => {
        try {
            // REceive the user data by params
            const token = req.query.token;
            console.log(token)
            // verify user through auth-service
            const verifyUser = await axios.post(VERIFY_USER_URL, {token})

            // Isolate the data property    
            const user = verifyUser.data;

            res.status(200).send(user)
        } catch (error) {
            console.error(`Error while trying to make register-user request to auth-service: ${error.message}`);
            const errorMessage = error.response.data.error
            console.log(errorMessage)
            res.status(400).json({
                error: errorMessage
            });
        }
    }

}




module.exports =  authController;

