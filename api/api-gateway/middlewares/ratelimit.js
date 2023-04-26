const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // maximun requests allowed per IP in the specific interval
    message: "You have reach your 10 request, please try again in 15 minutes.",
    headers: true,
});


module.exports = rateLimiter;