require('dotenv').config()
var cors = require('cors');
var path = require('path');
const express = require("express");
const db = require('../database')
//ATLAS FOR SHARED DB

const app = express();
app.use(express.static(__dirname + '/../dist/'));
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

var map = require('./map');
// var map = require('./profiles');

app.use('/map', map);

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
});