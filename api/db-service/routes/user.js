const express = require('express');
const { registerUserDB } = require('../controllers/userRegister');
const router = express.Router();


router.post('/register', registerUserDB);

module.exports = router;