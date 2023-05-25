const bcryptjs = require("bcryptjs");

/**
 * 
 * @param {*} flatPassword 
 */

const encrypt = async (flatPassword) => {
    const hash = await bcryptjs.hash(flatPassword, 10);
    return hash
};

/**
 * pass unencrypted password and encrypted password
 * @param {*} flatPassword 
 * @param {*} hashPassword 
 */

const compare = async (flatPassword, hashPassword) => {
    return await bcryptjs.compare(flatPassword, hashPassword);
};

module.exports = {
    encrypt,
    compare
};