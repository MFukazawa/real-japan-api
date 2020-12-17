const express = require('express');
const app = express();
const port = 9027;
const cors = require('cors');
const register = require('./controllers/register');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const testObject = {
  "one": "one"
}

app.get('/', (req, res) => {
  res.json('testing')
})

app.post('/register', (req, res) => {
  register.handleRegister(req, res)
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
})

// API Planning
/*
/ --> onclick GET = API response via DB
/register --> POST = user
/search --> PUT = user


*/