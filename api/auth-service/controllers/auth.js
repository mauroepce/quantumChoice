const axios = require('axios');
const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require('../utils/handlejwt');


/**
 * Registrar un usuario
 * @param {*} req
 * @param {*} res
 */


const authController = {
    registerController: async (req, res) => {
        try {
            req = matchedData(req);
            const password = await encrypt(req.password);
            const body = { ...req, password };
            const dataUser = await axios.post("http://localhost:3004/db-service/user/register", body)

            const userData = dataUser.data; // Acceder a la propiedad "data" de la respuesta

            const data = {
                token: await tokenSign(userData),
                user: userData,
            };

            res.status(200).send({data})
        } catch (error) {
            console.error(`Error while registering the "user" on DB: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
        }
    }
}




module.exports =  authController;

