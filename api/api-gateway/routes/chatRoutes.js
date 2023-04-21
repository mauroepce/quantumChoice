const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers');
const validateLengthPrompt = require('../validators/chatValidator');
const validateTimeRange = require('../validators/timeValidators');

router.post('/generate-realities', validateLengthPrompt, validateTimeRange, chatController.generateRealities);

module.exports = router;