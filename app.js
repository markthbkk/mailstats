const express = require('express');
const bodyParser = require('body-parser');
const mailStatsRouter = require('./src/v1/routes/mailStatsRoutes');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/src/v1/public`));
app.use('/', mailStatsRouter);

module.exports = app;
