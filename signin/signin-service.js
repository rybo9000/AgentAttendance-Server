const SignInService = {
  // FIND USER WITH GIVEN CREDENTIALS
  login(knex, username, password, mcid) {
    return knex.select("*").from("users").where({
      username,
      password,
      mcid,
    });
  },
  // GET LIST OF MARKET CENTERS
  getMarketCenters(knex) {
    return knex.select("*").from("marketcenter");
  },
};

module.exports = SignInService;
