const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const port = 5000;

const mysql = require('mysql');
const configDB = require('./config/database');
const db = mysql.createConnection(configDB);

// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

require('./app/routes.js')(app, db);

app.listen(port, () => {
    console.log('Port running on localhost:' + port)
});