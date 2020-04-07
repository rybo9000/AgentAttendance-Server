const knex = require("knex");
const app = require("../src/app");

describe("MC-ROUTER Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("GET /api/mc/classes responds with 200", () => {
    return supertest(app).get("/api/mc/classes").set({ mcid: "1" }).expect(200);
  });

  it("POST /api/mc/classes responds with 201", () => {
    return supertest(app)
      .post("/api/mc/classes")
      .send({ classname: "test", mcid: "1" })
      .expect(201);
  });

  it("GET /api/mc/class responds with 200", () => {
    return supertest(app)
      .get("/api/mc/class")
      .query({ classid: "1" })
      .expect(200);
  });

  it("GET /api/mc/users responds with 200", () => {
    return supertest(app).get("/api/mc/users").set({ mcid: "1" }).expect(200);
  });

  it("POST /api/mc/users responds with 201", () => {
    return supertest(app)
      .post("/api/mc/users")
      .send({
        firstname: "test2",
        lastname: "user",
        username: "test_user2",
        password: "123asdf",
        email: "test@test.com",
        mcid: "1",
      })
      .expect(201);
  });

  it("GET /api/mc/stats/totalcheckins responds with 200", () => {
    return supertest(app)
      .get("/api/mc/stats/totalcheckins")
      .set({ mcid: "1" })
      .expect(200);
  });

  it("GET /api/mc/stats/totalclasses responds with 200", () => {
    return supertest(app)
      .get("/api/mc/stats/totalclasses")
      .set({ mcid: "1" })
      .expect(200);
  });

  it("GET /api/mc/stats/totalagents responds with 200", () => {
    return supertest(app)
      .get("/api/mc/stats/totalagents")
      .set({ mcid: "1" })
      .expect(200);
  });

  it("GET /api/mc/stats/getname responds with 200", () => {
    return supertest(app)
      .get("/api/mc/stats/getname")
      .set({ mcid: "1" })
      .expect(200);
  });
});
