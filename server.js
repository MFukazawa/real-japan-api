const express = require('express');
const app = express();
const port = 9027;
const cors = require('cors');
const bcrypt = require('bcrypt');
const knex = require('knex');
// const axios = require('axios');

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

app.post('/register', (req, res) => { register.handleRegister(req, res, db , bcrypt) })

app.post('/login', login.handleLogin(db, bcrypt))

app.get('/', (req, res) => {
  db.select('id', 'name').from('cities')
    .where('id', '=', req.body.id)
    .then(data => {
      console.log(data);
    })
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
})


// for (let i=1; i <= 47; i++) {
//   let url = `https://www.land.mlit.go.jp/webland_english/api/CitySearch?area=${i}`
//   axios({
//     method: 'get',
//     url: url,
//     responseType: 'json'
//   })
//     .then((res) => {
//       let rawData = res.data.data
//       let fieldsToInsert = rawData.map(data =>
//         ({ id: data.id, name: data.name })
//       )
//       console.log(fieldsToInsert);
//       db('cities').insert(fieldsToInsert)
//       .then(() => console.log('success'))
//       .catch((e) => console.log(e))
//     })
//     .catch(e => console.log(e))
// }




// function getDataFromApi - can call with start or with a cron job

// API Planning
/*
/search --> GET = API response via DB
/register --> POST = user
/signin --> POST = user
/create-cache --> POST = API data - secret key

*/