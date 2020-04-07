const express = require("express");
const ReportsService = require("./reports-service");

const ReportsRouter = express.Router();
const jsonParser = express.json();

ReportsRouter.route("/byclass")
  // GET ALL COMPLETED ENTRIES FOR BYCLASS REPORT
  .get(jsonParser, (req, res, next) => {
    const knexInstance = req.app.get("db");

    const { classid, mcid } = req.query;

    if (!classid) {
      res.status(400).json({ error: "Please provide a classid value" });
    }

    if (!mcid) {
      res.status(400).json({ error: "Please provide an mcid value" });
    }

    ReportsService.getCompletedClass(
      knexInstance,
      classid,
      mcid
    ).then((response) => res.status(200).json(response));
  });

module.exports = ReportsRouter;
