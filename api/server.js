const session = require('express-session');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticated = require('../auth/authenticate-middleware.js');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js')
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

const sessionConfig = {
  name: 'token',
  secret: process.env.COOKIE_SECRET || "cookie_secret",
  cookie: {
    maxAge: 3600 * 1000,
    secure: false, 
  },
  resave: false,
  saveUninitialized: false,  
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig))

server.use('/api/auth', authRouter);
server.use('/api/users', authenticated, usersRouter);
server.use('/api/jokes', jokesRouter);

server.get('/', (req, res) => {
  res.send("Welcome to our API")
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
