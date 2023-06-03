
const axios = require('axios');
require('dotenv').config();


const VERIFY_USER_TOKEN_URL = process.env.VERIFY_USER_TOKEN_URL


/**
 * A middleware to use when a route require session
 * @param {*} res 
 * @param {*} res 
 * @param {*} next 
 */


const authMiddleware = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(" ").pop();

        if(!token){
            res.status(401).send({message: "A user token is required"})
            return;
        }
       
        // Obtain data of token 
        const verifyUserToken = await axios.post(VERIFY_USER_TOKEN_URL, {token});
       
        const dataToken = verifyUserToken.data;

        if(!dataToken._id){
            return res.status(401).send({message: "Error with the Token id"})
        }

        next();

    } catch (error) {
        res.status(401).send({message: "This user does not have a session"})
    }

}

module.exports = authMiddleware;