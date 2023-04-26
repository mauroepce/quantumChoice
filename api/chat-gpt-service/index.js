const server = require('./app');
require("dotenv").config();

const port = process.env.PORT || 3003;

server.listen(port, () => {
    console.log(`Chat-gpt-service microservice running on PORT: ${port}`);
})