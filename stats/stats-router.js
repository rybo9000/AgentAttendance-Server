const express = require("express");
const StatsService = require("./stats-service");

const statsRouter = express.Router();

statsRouter
  .route("/marketcenters")
  // GET TOTAL NUMBER OF MARKET CENTERS
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    StatsService.getTotalMarketCenters(knexInstance)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  });

statsRouter
  .route("/classes")
  // GET TOTAL NUMBER OF CLASSES
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    StatsService.getTotalClasses(knexInstance)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  });

statsRouter
  .route("/agents")
  // GET TOTAL NUMBER OF AGENTS
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    StatsService.getTotalAgents(knexInstance)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  });

statsRouter
  .route("/checkins")
  // GET TOTAL NUMBER OF CHECKINS
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    StatsService.getTotalCheckIns(knexInstance)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  });

module.exports = statsRouter;
