const CheckInService = {
  // VERIFY CREDENTIALS SUBMITTED BY A USER ON THE CHECKIN PAGE
  verifyCredentials(knex, username, password, mcid) {
    return knex.select("*").from("users").where({
      username,
      password,
      mcid,
    });
  },
  // VERIFY IF A DUPLICATE ENTRY ALREADY EXISTS IN THE DATABASE
  verifyDuplicates(knex, userid, classid, mcid, completed) {
    return knex.select("*").from("completed").where({
      userid,
      classid,
      mcid,
      completed,
    });
  },
  // INSERT A NEW CHECKIN ENTRY INTO THE DATABASE
  CheckIn(knex, newCheckIn) {
    return knex
      .insert(newCheckIn)
      .into("completed")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
};

module.exports = CheckInService;
