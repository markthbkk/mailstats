const express = require('express');
const bodyParser = require('body-parser');
const certsRouter = require('./src/v1/routes/certsRoutes');
const app = express();
const cors = require('cors');

// const corsOptions = {
//     origin: 'http://localhost:3000'
// }

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/src/v1/public`));
app.use('/', certsRouter);

module.exports = app;
