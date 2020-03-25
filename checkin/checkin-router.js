const express = require('express');
const CheckInService = require('./checkin-service');


const CheckInRouter = express.Router();
const jsonParser = express.json();

CheckInRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        
        const knexInstance = req.app.get('db')
        
        // VERIFY CREDENTIALS

        const { username, password, mcid, classid } = req.body
                
        CheckInService.verifyCredentials(knexInstance, username, password, mcid)
            .then(response => {
                if (response.length !== 1) {
                    res.status(400).json({ error: 'Invalid Credentials' })
                } else {
                    
                    const userid = response[0].id;
                    const completed = new Date();                
                    
                    CheckInService.verifyDuplicates(knexInstance, userid, classid, mcid, completed) 
                        .then(response => {
                            if (response.length > 0) {
                                res.status(403).json({ error: 'User is already signed in to this class' })
                            }
                            else {
                                
                                const newCheckIn = {userid, classid, mcid, completed};
                                
                                CheckInService.CheckIn(knexInstance, newCheckIn)
                                    .then(response => console.log(response))
                                    .catch(res.json({ error: response}))
                                    

                            }
                        })
        
            }})

        // POST NEW LOGIN
    })

module.exports = CheckInRouter;