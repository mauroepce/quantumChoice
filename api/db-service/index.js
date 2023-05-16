require("dotenv").config();
const dbConnect = require('./config/mongo');
const server  = require('./app');

const port = process.env.PORT || 3004;

server.listen(port, () => {
    console.log(`db-service microservice running on PORT: ${port}`)
})

dbConnect();