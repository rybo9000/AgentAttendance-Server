const express = require('express')
const SignInService = require('./signin-service')
const JWT = require('jsonwebtoken');
const config = require('../src/config.js');


const SignInRouter = express.Router();
const jsonParser = express.json();



SignInRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
       
        const { username, password, mcid } = req.body

        const knexInstance = req.app.get('db');
       
        SignInService.login(knexInstance, username, password, mcid)
            .then(response => {
                if (!response[0]) {
                    res.status(403).json({ error: 'invalid username / password' })
                } else {
                    const token = JWT.sign({
                        iss: 'Agent Attendance',
                        mcid: mcid,
                        id: response[0].id,
                        lvl: response[0].lvl,
                        iat: new Date().getTime(),
                        given_name: response[0].firstname,
                        family_name: response[0].lastname
                        
                    },
                    config.JWT_SECRET,
                    { expiresIn: '2h' })

                    res.status(200).json(token);
                }
            })
            .catch(next)
    })

    SignInRouter
    .route('/classes')
    .get((req, res, next) => {

        const knexInstance = req.app.get('db')
        SignInService.getMarketCenters(knexInstance)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })

module.exports = SignInRouter;
