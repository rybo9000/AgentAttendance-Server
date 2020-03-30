PassportService = {
  validateUser(knex, userInfo) {
    return knex
      .select("*")
      .from("users")
      .where({
        username: userInfo.username,
        password: userInfo.password
      });
  }
};

module.exports = PassportService;
