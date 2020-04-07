const StatsService = {
  // GET TOTAL NUMBER OF MARKET CENTERS
  getTotalMarketCenters(knex) {
    return knex("marketcenter").count("*");
  },
  // GET TOTAL NUMBER OF CLASSES
  getTotalClasses(knex) {
    return knex("classes").count("*");
  },
  // GET TOTAL NUMBER OF AGENTS
  getTotalAgents(knex) {
    return knex("users").count("*");
  },
  // GET TOTAL NUMBER OF CHECKINS
  getTotalCheckIns(knex) {
    return knex("completed").count("*");
  },
};

module.exports = StatsService;
