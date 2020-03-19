const express = require('express');
const MCService = require('./mc-service');
const xss = require('xss');

const MCRouter = express.Router();
const jsonParser = express.json();

MCRouter
    .route('/classes')
    .get((req, res, next) => {
        const mcid = req.get('mcid');
        
        if (!mcid) {
            res.status(400).json({ error: 'Please provide an mcid value' })
        }

        const knexInstance = req.app.get('db')
        MCService.listClasses(knexInstance, mcid)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        
        const { classname } = req.body;

        const mcid = req.get('mcid');
        
        if (!classname) {
            res.status(400).json({ error: 'Please provide a classname value' })
        }

        if (!mcid) {
            res.status(400).json({ error: 'Please provide a mcid value' })
        }

        const newClass = { classname, mcid }
        
        const knexInstance = req.app.get('db')
        
        MCService.addClass(knexInstance, newClass)
            .then(result => {
                res
                .status(201)
                .location(`api/class/${result.id}`)
                .json(result)

            })
    })

MCRouter
    .route('/users')
    .get((req, res, next) => {
        const mcid = req.get('mcid');

        if (!mcid) {
            res.status(400).json({ error: 'Please provide an mcid value' })
        }

        const knexInstance = req.app.get('db')
        MCService.listUsers(knexInstance, mcid)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        
        const knexInstance = req.app.get('db')
        
        // CHECK TO SEE IF USERNAME ALREADY EXISTS

        const checkUserName = req.body.username;

        MCService.checkForUserName(knexInstance, checkUserName)
            .then(result => {
                
                if (Number(result[0].count)) {
                    return res.status(403).json({error : 'Username already exists'});
                }

            
            })
            .catch(next)
            
        
        // IF USERNAME DOES NOT EXIST BUILD OBECT TO SEND TO FUNCTION
        
        const { firstname, lastname, username, password, email } = req.body
        const mcid = req.get('mcid')
        const lvl = 1;

        const newUser = {firstname, lastname, username, password, lvl, email, mcid};

        for (const [key, value] of Object.entries(newUser)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
            }
        }


        // CALL FUNCTION TO POST USER

        MCService.addUser(knexInstance, newUser)
            .then(result => {
                res
                .status(201)
                .location(`api/users/${result.id}`)
                .json(result)

            })
            .catch(next)




    })


module.exports = MCRouter;

