const bcrypt = require("bcryptjs")
const db = require('../database/dbconfig.js')

const express = require("express")
const Users = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Users.getAll())
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const user = await Users.insert(req.body)
		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

module.exports = router