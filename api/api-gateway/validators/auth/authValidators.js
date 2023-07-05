const {check} = require('express-validator');
const { validateResult } = require('../../utils/handlerValidator');


const validatorRegister = [
    check("name")
    .optional()
    .isLength({min:3, max:99}),
    check("age")
    .optional()
    .isNumeric(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        
        return validateResult(req, res, next)
    }
];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = { 
    validatorRegister, 
    validatorLogin
}