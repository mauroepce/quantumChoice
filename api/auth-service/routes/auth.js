const express = require('express');
const {matchedData} = require("express-validator")
const { validatorRegister } = require('../validators/auth');
const router = express.Router();



// Auth routes

// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register

router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req);
    res.send({data: req});
})

module.exports = router;