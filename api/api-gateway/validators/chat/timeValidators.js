const {check} = require('express-validator');
const { validateResult } = require('../../utils/handlerValidator');


const validateTimeRange = [
    check('time')
        .exists()
        .withMessage('Time range is required')
        .isFloat({min:0.6, max:1})
        .withMessage('Range time must be between 0.6 and 1'),
        (req, res, next) => validateResult(req, res, next),
];

module.exports = validateTimeRange;