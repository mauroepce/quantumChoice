const express = require('express');
const { registerUserDB } = require('../controllers/user');
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

module.exports = router;