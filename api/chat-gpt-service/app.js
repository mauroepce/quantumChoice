const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'));

// Dynamics routes
app.use('/chat-gpt-service', require('./routes'));

module.exports = app;