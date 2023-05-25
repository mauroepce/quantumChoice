const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

/**
 * We need to pass the user object
 * @param {*} user 
 */


const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    return sign;
};

/**
 * We need to pass the session token JWT
 * @param {*} tokenJwt 
 * @returns 
 */

const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, )
    } catch (error) {
        return null;
    }
}

module.exports = {
    tokenSign,
    verifyToken
}