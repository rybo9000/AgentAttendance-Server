const knex = require("knex");
const app = require("../src/app");

describe("REPORTS-ROUTER Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("GET /api/reports/byclass responds with 200", () => {
    return supertest(app)
      .get("/api/reports/byclass")
      .query({ mcid: "1", classid: "1" })
      .expect(200);
  });
});
