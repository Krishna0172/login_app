require("./config/db");
const express = require('express');
const bodyParser = express.json;
const app = express();
const cors = require('cors');
const routes = require('./routes');
app.use(cors());
app.use(bodyParser());
app.use('/api/v1', routes);


module.exports = app;
