const express = require("express");
const CheckInService = require("./checkin-service");

const CheckInRouter = express.Router();
const jsonParser = express.json();

CheckInRouter.route("/")
  // CREATE NEW CHECKIN TO CLASS
  .post(jsonParser, (req, res, next) => {
    const knexInstance = req.app.get("db");

    const { username, password, mcid, classid } = req.body;

    // VERIFY CREDENTIALS
    CheckInService.verifyCredentials(
      knexInstance,
      username,
      password,
      mcid
    ).then((response) => {
      // IF USER IS NOT FOUND
      if (response.length !== 1) {
        res.status(400).json({ notification: "Invalid Credentials" });
      } else {
        // IF USER IS FOUND
        const userid = response[0].id;
        const completed = new Date();

        // CHECK TO SEE IF THIS USER HAS ALREADY SIGNED INTO CLASS
        CheckInService.verifyDuplicates(
          knexInstance,
          userid,
          classid,
          mcid,
          completed
        ).then((response) => {
          if (response.length > 0) {
            res.status(403).json({
              notification: "User is already signed in to this class",
            });
          } else {
            const newCheckIn = { userid, classid, mcid, completed };

            // POST NEW LOGIN
            CheckInService.CheckIn(knexInstance, newCheckIn)
              .then(
                res
                  .status(201)
                  .json({
                    notification:
                      "User Signed In!  Please pass the tablet to the next user!",
                  })
              )
              .catch();
          }
        });
      }
    });
  });

module.exports = CheckInRouter;
