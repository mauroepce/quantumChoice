const { check } = require('express-validator');
const { validateResult } = require('../utils/handlerValidator');

const validateLengthPrompt = [
    check('prompt', 'The prompt field is required: length (max: 500, min: 20').exists().notEmpty().isLength({max:500, min:20}),
    (req, res, next) => validateResult(req, res, next)
]

module.exports = validateLengthPrompt;