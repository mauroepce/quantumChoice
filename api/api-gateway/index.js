const server = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`Api-gateway microservice running on PORT: ${port}`)
})