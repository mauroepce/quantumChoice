const axios = require('axios');
require('dotenv').config();

const CHAT_GPT_SERVICE_URL = process.env.CHAT_GPT_SERVICE_URL

const chatController = {
    generateRealities: async (req, res) => {

        try {
            const { prompt, time } = req.body;
            const chatGPTServiceURL = CHAT_GPT_SERVICE_URL;
            
            const response = await axios.post(chatGPTServiceURL, {
                prompt: prompt,
                time: time
            });
            
            res.status(200).json(response.data);
        } catch (error) {
            console.error(`Error while requesting chat-gpt-services: ${error.message}`);
            res.status(500).json({
                error: {
                    message: error,
                },
            });
        }
    },
};

module.exports = chatController;