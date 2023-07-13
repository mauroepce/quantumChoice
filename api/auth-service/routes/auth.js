const express = require('express');
const authController = require('../controllers/auth');
const verifyUserToken = require('../middlewares/verifyToken');
const router = express.Router();


/**
 *  Create a user
 */

router.post("/register-user",  authController.registerController)


/**
 *  Login a user
 */

router.post("/login-user", authController.loginController)


/**
 *  Verify user token 
 */

router.post("/verify-user-token", verifyUserToken)


/**
 * Verify user from email
 */

router.post("/verify-user", authController.verifyUserController)


module.exports = router;