
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Dynamics routes
app.use('/api-gateway', require('./routes'))

module.exports = app;