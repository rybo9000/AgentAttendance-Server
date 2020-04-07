const express = require("express");
const MCService = require("./mc-service");

const MCRouter = express.Router();
const jsonParser = express.json();

MCRouter.route("/classes")
  // LIST ALL THE CLASSES FOR YOUR MARKET CENTER
  .get((req, res, next) => {
    const mcid = req.get("mcid");

    if (!mcid) {
      res.status(400).json({ error: "Please provide an mcid value" });
    }

    const knexInstance = req.app.get("db");
    MCService.listClasses(knexInstance, mcid)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  })
  // ADD A NEW CLASS FOR YOUR MARKET CENTER
  .post(jsonParser, (req, res, next) => {
    const { classname, mcid } = req.body;

    if (!classname) {
      res.status(400).json({ error: "Please provide a classname value" });
    }

    if (!mcid) {
      res.status(400).json({ error: "Please provide a mcid value" });
    }

    const newClass = { classname, mcid };

    const knexInstance = req.app.get("db");

    MCService.addClass(knexInstance, newClass).then((result) => {
      res.status(201).location(`api/class/${result.id}`).json(result);
    });
  });

MCRouter.route("/class")
  // FIND A SINGLE CLASS BY CLASS ID
  .get((req, res, next) => {
    const { classid } = req.query;

    if (!classid) {
      res.status(400).json({ error: "Please provide an classid value" });
    }

    const knexInstance = req.app.get("db");
    MCService.getClass(knexInstance, classid)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  });

MCRouter.route("/users")
  // LIST ALL USERS FOR YOUR MARKET CENTER
  .get((req, res, next) => {
    const mcid = req.get("mcid");

    if (!mcid) {
      res.status(400).json({ error: "Please provide an mcid value" });
    }

    const knexInstance = req.app.get("db");
    MCService.listUsers(knexInstance, mcid)
      .then((results) => {
        res.json(results);
      })
      .catch(next);
  })
  // ADD A NEW USER FOR YOUR MARKET CENTER
  .post(jsonParser, (req, res, next) => {
    const knexInstance = req.app.get("db");

    // CHECK TO SEE IF USERNAME ALREADY EXISTS

    const { username, mcid } = req.body;

    MCService.checkForUserName(knexInstance, username, mcid)
      .then((result) => {
        if (Number(result[0].count)) {
          return res.status(403).json({ error: "Username already exists" });
        } else {
          // IF USERNAME DOES NOT EXIST BUILD OBECT TO SEND TO FUNCTION

          const {
            firstname,
            lastname,
            username,
            password,
            email,
            mcid,
          } = req.body;

          const lvl = 1;

          const newUser = {
            firstname,
            lastname,
            username,
            password,
            lvl,
            email,
            mcid,
          };

          for (const [key, value] of Object.entries(newUser)) {
            if (value == null) {
              return res.status(400).json({
                error: { message: `Missing '${key}' in request body` },
              });
            }
          }

          // CALL FUNCTION TO POST USER

          MCService.addUser(knexInstance, newUser)
            .then((result) => {
              console.log(result);

              res.status(201).location(`api/users/${result.id}`).json(result);
            })
            .catch(next);
        }
      })
      .catch(next);
  });

// GET TOTAL NUMBER OF CLASSES FOR YOUR MARKET CENTER
MCRouter.route("/stats/totalclasses").get((req, res, next) => {
  const mcid = req.get("mcid");

  if (!mcid) {
    res.status(400).json({ error: "Please provide an mcid value" });
  }

  const knexInstance = req.app.get("db");
  MCService.getTotalClasses(knexInstance, mcid)
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

// GET TOTAL NUMBER OF CHECK-INS FOR YOUR MARKET CENTER
MCRouter.route("/stats/totalcheckins").get((req, res, next) => {
  const mcid = req.get("mcid");

  if (!mcid) {
    res.status(400).json({ error: "Please provide an mcid value" });
  }

  const knexInstance = req.app.get("db");
  MCService.getTotalCheckIns(knexInstance, mcid)
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

// GET TOTAL NUMBER OF AGENTS FOR YOUR MARKET CENTER
MCRouter.route("/stats/totalagents").get((req, res, next) => {
  const mcid = req.get("mcid");

  if (!mcid) {
    res.status(400).json({ error: "Please provide an mcid value" });
  }

  const knexInstance = req.app.get("db");
  MCService.getTotalAgents(knexInstance, mcid)
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

// GET NAME OF MARKET CENTER FROM THE DATABASE
MCRouter.route("/stats/getname").get((req, res, next) => {
  const mcid = req.get("mcid");

  if (!mcid) {
    res.status(400).json({ error: "Please provide an mcid value" });
  }

  const knexInstance = req.app.get("db");
  MCService.getMCName(knexInstance, mcid)
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

module.exports = MCRouter;
