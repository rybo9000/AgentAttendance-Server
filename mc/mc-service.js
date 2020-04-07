const MCService = {
  // LIST ALL CLASSES FOR A MARKET CENTER
  listClasses(knex, mcid) {
    return knex.select("*").from("classes").where({ mcid });
  },
  // LIST A SINGLE CLASS BY ID
  getClass(knex, id) {
    return knex.select("*").from("classes").where({ id });
  },
  // LIST ALL USERS FOR A MARKET CENTER
  listUsers(knex, mcid) {
    return knex.select("*").from("users").where({ mcid });
  },
  // ADD A CLASS TO A MARKET CENTER
  addClass(knex, classname) {
    return knex
      .insert(classname)
      .into("classes")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  // ADD A USER TO A MARKET CENTER
  addUser(knex, username) {
    return knex("users").returning("*").insert({
      firstname: username.firstname,
      lastname: username.lastname,
      username: username.username,
      password: username.password,
      lvl: username.lvl,
      email: username.email,
      mcid: username.mcid,
    });
  },
  // CHECK TO SEE IF A USERNAME ALREADY EXISTS
  checkForUserName(knex, username, mcid) {
    return knex("users").where({ username, mcid }).count("*");
  },
  // GET TOTAL NUMBER OF CLASSES FOR A MARKET CENTER
  getTotalClasses(knex, mcid) {
    return knex("classes").where({ mcid }).count("*");
  },
  // GET TOTAL NUMBER OF CHECK-INS FOR A MARKET CENTER
  getTotalCheckIns(knex, mcid) {
    return knex("completed").where({ mcid }).count("*");
  },
  // GET TOTAL NUMBER OF AGENTS FOR A MARKET CENTER
  getTotalAgents(knex, mcid) {
    return knex("users").where({ mcid }).count("*");
  },
  // GET NAME OF MARKET CENTER FROM THE DATABASE
  getMCName(knex, mcid) {
    return knex.select("mcname").from("marketcenter").where({ id: mcid });
  },
};

module.exports = MCService;
