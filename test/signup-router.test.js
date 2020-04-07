const knex = require("knex");
const app = require("../src/app");

describe("SIGNUP-ROUTER Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("POST /api/signup/marketcenter responds with 201", () => {
    return supertest(app)
      .post("/api/signup/marketcenter")
      .send({
        kwid: "8989",
        mcname: "Test MC Name",
        firstname: "Test First",
        lastname: "Test Last",
        username: "test_username",
        password: "asdfasdf",
        email: "email@email.com",
      })
      .expect(201);
  });
});
