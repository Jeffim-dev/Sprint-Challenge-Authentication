const supertest = require("supertest")
const server = require("./server")
const db = require("../database/dbConfig")

test("welcome route", async () =>{
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)   
})