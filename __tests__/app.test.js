const app = require("../app");
const request = require("supertest");
const endpointsFile = require("../endpoints.json");

beforeEach(() => {
  //return seed({ topicData, userData, articleData, commentData });
});

afterAll(() => {
  //return db.end();
});

describe("app", () => {
  describe("GET /api", () => {
    test("200: responds with an accurate JSON object", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then((response) => {
          const { endpoints } = response.body;
          expect(endpoints).toEqual(endpointsFile);
        });
    });
  });
  describe("Error handling", () => {
    test("404:route that does not exist returns 404", () => {
      return request(app).get("/notARoute").expect(404);
    });
  });
});
