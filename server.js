const express = require('express');
const app = express();
const port = 9027;
const cors = require('cors');
const bcrypt = require('bcrypt');
const knex = require('knex')

const register = require('./controllers/register');
const login = require('./controllers/login');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'micah',
    password: '',
    database: 'real-japan-db'
  }
})

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'password',
      joined: new Date()
    },
    {
      id: '124',
      name: 'Bob',
      email: 'bob@gmail.com',
      password: 'password',
      joined: new Date()
    },
    {
      id: '125',
      name: 'Aiko',
      email: 'aiko@gmail.com',
      password: 'password',
      joined: new Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.json(database.users)
})

app.post('/register', (req, res) => { register.handleRegister(req, res, db , bcrypt) })

app.post('/login', login.handleLogin(db, bcrypt))

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
})

// function getDataFromApi - can call with start or with a cron job

// API Planning
/*
/search --> GET = API response via DB
/register --> POST = user
/signin --> POST = user
/create-cache --> POST = API data - secret key

*/