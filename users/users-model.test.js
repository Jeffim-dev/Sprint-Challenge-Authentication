const supertest = require("supertest")
const server = require("../api/server")

test("get users", async () =>{
    const res = await supertest(server).get("/api/users")
    expect(res.statusCode).toBe(401)   
})