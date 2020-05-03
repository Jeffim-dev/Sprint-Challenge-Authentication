const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

beforeEach(async () => {
  await db('users').truncate();
});

test("create user", async () =>{
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({username: "aaa", password: "123"})
    expect(res.statusCode).toBe(201)  
    expect(res.type).toBe("application/json") 
})

test("login user", async () =>{
  await supertest(server)
      .post("/api/auth/register")
      .send({username: "aaa", password: "123"})

  const res = await supertest(server)
    .post("/api/auth/login")
    .send({username: "aaa", password: "123"})
  expect(res.statusCode).toBe(200)  
  expect(res.type).toBe("application/json")
})