const express = require('express');
const { validatorRegister } = require('../validators/auth');
const authController = require('../controllers/auth');
const router = express.Router();


// Auth routes

// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register

router.post("/register-user", validatorRegister, authController.registerController)

module.exports = router;