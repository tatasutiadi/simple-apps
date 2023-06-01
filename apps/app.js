const express = require('express')
const mysql = require('mysql');
const app = express()
require('dotenv').config();

const PORT = process.env.PORT;
const path = require('path')

app.disable("x-powered-by");

// Import Middleware
const logger = require('./middleware/logger')
app.use(logger)
const connection = require('./middleware/db_connect');

// Dashboard
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/app1', (req, res) => {
  res.send('Hello this Apps 1!')
});

app.get('/app2', (req, res) => {
  res.send('Hello this App 2!')
});

app.get('/tata', (req, res) => {
  res.send('Hello Tata!')
});

app.get('/users', (req, res, next) => {
  const sql = "SELECT * FROM tb_data ORDER BY id desc"
  connection.query(sql,(error, fields) => {
    res.send(fields)
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

module.exports = app