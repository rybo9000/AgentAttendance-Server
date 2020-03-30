const ReportsService = {
  getCompletedClass(knex, classid, mcid) {
    return knex
      .select("users.firstname", "users.lastname", "completed.completed")
      .from("completed")
      .join("users", "users.id", "=", "completed.userid")
      .where({ "completed.classid": classid, "completed.mcid": mcid });
  }
};

module.exports = ReportsService;
