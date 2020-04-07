const knex = require("knex");
const app = require("../src/app");

describe("SIGNIN-ROUTER Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("GET /api/signin/classes responds with 200", () => {
    return supertest(app).get("/api/mc/classes").set({ mcid: "1" }).expect(200);
  });

  it("POST /api/signin responds with 200", () => {
    return supertest(app)
      .post("/api/signin")
      .send({
        username: "rfielder",
        password: "ryan",
        mcid: "1",
      })
      .expect(200);
  });
});
