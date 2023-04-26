const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers');
const validateLengthPrompt = require('../validators/chatValidator');
const validateTimeRange = require('../validators/timeValidators');
const rateLimiter = require('../middlewares/ratelimit');

// Middleware of limit rate
router.use('/generate-realities', rateLimiter);

router.post('/generate-realities', validateLengthPrompt, validateTimeRange, chatController.generateRealities);

module.exports = router;