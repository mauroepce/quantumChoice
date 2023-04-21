const axios = require('axios');

const CHAT_GPT_SERVICE_URL = process.env.CHAT_GPT_SERVICE_URL

const chatController = {
    generateRealities: async (req, res) => {

        try {
            const prompt = req.body.prompt;
            const chatGPTServiceURL = CHAT_GPT_SERVICE_URL;
            const response = await axios.post(chatGPTServiceURL, {
                prompt: prompt
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.error(`Error while requesting chat-gpt-services: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error ocurred during your request.',
                },
            });
        }
    },
};

module.exports = chatController;