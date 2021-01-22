const express = require('express');
const app = express();
const port = 9027;
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'micah',
    password: '',
    database: 'real-japan-db'
  }
})

db.select('*').from('users').then(console.log);

const register = require('./controllers/register');
const login = require('./controllers/login');

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

app.post('/login', (req, res) => {
  if (req.body.email === database.users[0].email
    && req.body.password === database.users[0].password) {
      res.json(database.users[0])
  } else {
    res.status(400).json('error logging in')
  }
  // login.handleLogin(req, res)
})

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