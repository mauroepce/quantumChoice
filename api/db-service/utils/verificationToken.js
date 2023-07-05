const users = require("../models/users");

const storeVerificationToken = async (userId, verificationToken) => {
    try {

        // Store the verification token on DB
        const storeVerificationTokenData = await users.findByIdAndUpdate(userId, {verificationToken});

        return storeVerificationTokenData;
    } catch (error) {
        console.error(`Error while storing the verification token "user" on DB: ${error.message}`);
        throw error;
    }
}

module.exports = {
    storeVerificationToken
}