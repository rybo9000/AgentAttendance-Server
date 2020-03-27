require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const statsRouter = require('../stats/stats-router');
const MCRouter = require('../mc/mc-router');
const SignupRouter = require('../signup/signup-router');
const SignInRouter = require('../signin/signin-router');
const CheckInRouter = require('../checkin/checkin-router');
const ReportsRouter = require('../reports/reports-router');
const { NODE_ENV } = require('./config');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }


const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption));
app.use(cors(corsOptions));
app.use(helmet());

app.use('/api/stats', statsRouter)
app.use('/api/mc', MCRouter)
app.use('/api/signup', SignupRouter)
app.use('/api/signin', SignInRouter)
app.use('/api/checkin', CheckInRouter)
app.use('/api/reports', ReportsRouter)

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app;