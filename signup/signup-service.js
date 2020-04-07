const SignupService = {
  // SEE IF THE MARKET CENTER ALREADY EXISTS IN THE DATABASE
  findExistingMC(knex, kwid) {
    return knex("marketcenter").where({ kwid }).count("*");
  },
  // INSERT A NEW MARKET CENTER INTO THE DATABASE
  createNewMC(knex, mcinfo) {
    return knex
      .insert(mcinfo)
      .into("marketcenter")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  // INSERT A NEW (ADMIN) USER INTO THE DATABASE
  createNewAdmin(knex, newAdmin) {
    return knex
      .insert(newAdmin)
      .into("users")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
};

module.exports = SignupService;
