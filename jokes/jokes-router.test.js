const supertest = require("supertest")
const server = require("../api/server")

test("get jokes", async () => {
  const res = await supertest(server)
        .get("/api/jokes");
  expect(res.statusCode).toBe(200)  
  expect(res.type).toBe("application/json")   
})