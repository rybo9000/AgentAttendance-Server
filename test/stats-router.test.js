const knex = require("knex");
const app = require("../src/app");

describe("STATS-ROUTER Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("GET /api/stats/marketcenters responds with 200", () => {
    return supertest(app).get("/api/stats/marketcenters").expect(200);
  });

  it("GET /api/stats/classes responds with 200", () => {
    return supertest(app).get("/api/stats/classes").expect(200);
  });

  it("GET /api/stats/agents responds with 200", () => {
    return supertest(app).get("/api/stats/agents").expect(200);
  });

  it("GET /api/stats/checkins responds with 200", () => {
    return supertest(app).get("/api/stats/checkins").expect(200);
  });
});
