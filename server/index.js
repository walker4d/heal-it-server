const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const app = express();
const Port = process.env.PORT || 8000;

//Database
require('./DbInit')();

//middlewear
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const Posts = require('../Routes/Posts');
const user = require('../Routes/user');

app.use('/posts',Posts);
app.use('/',user);


app.listen(Port, ()=> {console.log(`server started on port ${Port}`)})
