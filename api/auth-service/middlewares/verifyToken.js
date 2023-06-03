const { verifyToken } = require("../utils/handlejwt");


const verifyUserToken = async (req, res) => {

    try {
        const {token} = req.body;

        const dataToken = await verifyToken(token)
       
        res.status(200).send(dataToken);

    } catch (error) {
        
        res.status(500).send({message: "There's a problem trying to verify the user Token"})
    }
    
}

module.exports = verifyUserToken;