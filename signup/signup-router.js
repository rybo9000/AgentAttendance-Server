const express = require('express');
const SignupService = require('./signup-service.js');
const JWT = require('jsonwebtoken');
const config = require('../src/config.js');


const SignupRouter = express.Router();
const jsonParser = express.json();

SignupRouter
    .route('/marketcenter')
    .post (jsonParser, (req, res, next) => {
        // CHECK FOR EXISTING MCID
        const knexInstance = req.app.get('db');

        const { kwid } = req.body;
        
        // IF KWID NOT SENT IN BODY
        if (!kwid) {
            res.status(400).json({ error: 'Please enter an KWID value' })
        } else {

            // CHECK FOR EXISTING KWID
            
            SignupService.findExistingMC(knexInstance, kwid)
            .then(response => {
                if (Number(response[0].count) > 0) {
                    res.status(403).json({ error: `Market Center ${kwid} already exists!`})
                }
                else {
                    
                    // IF NEW CREATE NEW MC
                    
                    const { mcname } = req.body;

                    const newMC = {mcname, kwid};

                    const { firstname, lastname, username, password, email } = req.body;
                    
                    const lvl = 3;

                    SignupService.createNewMC(knexInstance, newMC)
                        .then(response => {
                            
                            const mcid = response.id;
                            
                            const newAdmin = {firstname, lastname, username, password, lvl, email, mcid}
                            
                            SignupService.createNewAdmin(knexInstance, newAdmin)
                            .then(response => {
                                
                                const token = JWT.sign({
                                    iss: 'Agent Attendance',
                                    mcid: mcid,
                                    id: response.id,
                                    lvl: response.lvl,
                                    iat: new Date().getTime(),
                                    given_name: response.firstname,
                                    family_name: response.lastname
                                    
                                },
                                config.JWT_SECRET,
                                { expiresIn: '2h' })
    
                                res.status(200).json(token);
                            })
                        })
                        .catch(next)

                }
            })
            .catch(next)
        }
 

    })

module.exports = SignupRouter;



