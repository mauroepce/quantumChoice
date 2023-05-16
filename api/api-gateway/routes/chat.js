const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers');

const rateLimiter = require('../middlewares/ratelimit');
const validateTimeRange = require('../validators/chat/timeValidators');
const validateLengthPrompt = require('../validators/chat/chatValidator');

// Middleware of limit rate
router.use('/generate-realities', rateLimiter);

router.post('/generate-realities', validateLengthPrompt, validateTimeRange, chatController.generateRealities);

module.exports = router;