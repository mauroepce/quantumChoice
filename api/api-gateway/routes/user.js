const express = require('express');
const { validatorRegister, validatorLogin } = require('../validators/auth/authValidators');
const authController = require('../controllers/userController');
const router = express.Router();


/**
 *  Create a user
 */

router.post("/register", validatorRegister, authController.registerController)


/**
 *  Login a user
 */

router.post("/login", validatorLogin, authController.loginController)



module.exports = router;