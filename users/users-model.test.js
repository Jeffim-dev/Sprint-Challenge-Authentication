const db = require("../data/dbconfig")
const usersModel = require("./users-model")

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

test("insert", async () => {
	const res = await usersModel.insert({ name: "bilbo" })
	expect(res.name).toBe("bilbo")
})

test("findById", async () => {
	const res = await usersModel.findById(1)
	expect(res.name).toBe("sam")
})

test("update", async () => {
	const res = await usersModel.update(1, { name: "bilbo" })
	expect(res.name).toBe("bilbo")
})