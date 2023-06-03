const users = require("../models/users");


/**
 * Check if user email is registered in DB
 * @param {*} req 
 * @param {*} res 
 */

const checkEmail = async (req, res) => {
    try {
         const userEmail = req.body;
        console.log(userEmail)
         const checkEmail = await users.findOne(userEmail).select("password name role email");
        
         res.status(200).send(checkEmail)

    } catch (error) {
        console.error(`Error while trying to find "user email" on DB: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
    }
}

module.exports = checkEmail;