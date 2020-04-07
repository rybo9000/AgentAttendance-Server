const knex = require("knex");
const app = require("../src/app");

describe("CHECK-IN Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("POST /api/checkin responds with 201", () => {
    return supertest(app)
      .post("/api/checkin")
      .send({
        username: "test",
        password: "test",
        mcid: "1",
        classid: "1",
      })
      .expect(201);
  });
});
