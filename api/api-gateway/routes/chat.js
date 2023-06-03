const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers');
const rateLimiter = require('../middlewares/ratelimit');
const validateTimeRange = require('../validators/chat/timeValidators');
const validateLengthPrompt = require('../validators/chat/chatValidator');
const authMiddleware = require('../middlewares/session');

/**
 * Middleware of rate limitt
 */
router.use('/generate-realities', rateLimiter);

/**
 * Generate realitites
 */

router.post('/generate-realities', authMiddleware, validateLengthPrompt, validateTimeRange, chatController.generateRealities);

module.exports = router;