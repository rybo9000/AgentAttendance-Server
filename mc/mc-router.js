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

        res.send(newClass);
        
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


module.exports = MCRouter;

