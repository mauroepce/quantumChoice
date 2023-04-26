const express = require('express');
const realitiesController = require('../controllers/realitiesController');
const router = express.Router();


router.post('/gpt-3.5-turbo', realitiesController.generateRealities);

module.exports = router;