const { Configuration, OpenAIApi} = require('openai');
const { generateQuantumChoicePrompt } = require('../utils/generatePrompt');
require('dotenv').config();

const apiKey = process.env.OPEN_API_KEY
const configuration = new Configuration({
    apiKey
});

const openai = new OpenAIApi(configuration);

const realitiesController = {
    generateRealities: async (req, res) => {
        try {
          
            const { prompt, time } = req.body;
            const message = generateQuantumChoicePrompt(prompt, time)
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: message,
                // temperature: 0.7,
                // max_tokens: 150,
                // n: 1,
                // top_p: 0.7,
                // frequency_penalty: 0.1,
                // presence_penalty: 0.1,
            })
            res.status(200).json({result: completion.data.choices[0].message.content});
        } catch (error) {
            if (error.response) {
                console.error(error.response.status, error.response.data);
                res.status(error.response.status).json(error.response.data);
              } else {
                console.error(`Error with OpenAI API request: ${error.message}`);
                res.status(500).json({
                  error: {
                    message: "error.message",
                  }
                });
              }
            }
    }
};

module.exports = realitiesController;