const express = require('express');
const { 
    registerUserDB, 
    storeVerificationToken, 
    verifyUserController } = require('../controllers/user');
const checkEmail = require('../middlewares/checkEmail');
const router = express.Router();

/**
 * Register a user on DB
 */
router.post('/register', registerUserDB);

/**
 * Check if user email is registered on DB
 */

router.post('/check_email', checkEmail);

/**
 * Store the verification token on DB
 */

router.post('/store_verification_token', storeVerificationToken);

/**
 * Verify user with token on DB
 */

router.post('/verify_user', verifyUserController)

module.exports = router;