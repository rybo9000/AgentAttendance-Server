const express = require("express");
const StatsService = require("./stats-service");

const statsRouter = express.Router();

statsRouter.route("/marketcenters").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  StatsService.getTotalMarketCenters(knexInstance)
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

statsRouter.route("/classes").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  StatsService.getTotalClasses(knexInstance)
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

statsRouter.route("/agents").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  StatsService.getTotalAgents(knexInstance)
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

statsRouter.route("/checkins").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  StatsService.getTotalCheckIns(knexInstance)
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

module.exports = statsRouter;
