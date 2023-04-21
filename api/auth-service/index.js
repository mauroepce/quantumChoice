require("dotenv").config();
const server  = require('./app');

const port = process.env.PORT || 3002;

server.listen(port, () => {
    console.log(`Auth-service microservice running on PORT: ${port}`)
})