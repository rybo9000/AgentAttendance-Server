const StatsService = {
  getTotalMarketCenters(knex) {
    return knex("marketcenter").count("*");
  },
  getTotalClasses(knex) {
    return knex("classes").count("*");
  },
  getTotalAgents(knex) {
    return knex("users").count("*");
  },
  getTotalCheckIns(knex) {
    return knex("completed").count("*");
  }
};

module.exports = StatsService;
