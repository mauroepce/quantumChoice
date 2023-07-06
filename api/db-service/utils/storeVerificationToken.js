const Users = require("../models/users");

const storeVerificationToken = async (req, res) => {
  try {
    // Destructuring the data from the request body
    const { userId, verificationToken } = req.body;
    console.log(verificationToken)
    // Store the verification token in the DB
    const storeVerificationTokenData = await Users.findByIdAndUpdate(
      userId,
      { verificationToken }
    );

    res.status(200).send({storeVerificationTokenData, tokenStored: true});
  } catch (error) {
    console.error(`Error while storing the verification token in the "users" collection: ${error.message}`);
    res.status(500).json({
      error: {
        message: error,
      },
    });
  }
};

module.exports = {
  storeVerificationToken
};
