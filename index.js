'use strict';

const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

// const app = require('express')();

const port = 3000;
const host = 'localhost';

app.use(express.static(path.join(__dirname, 'public')));

const homePath = path.join(__dirname, 'home.html');
const pageBpath = path.join(__dirname, 'pageB.html');

app.get('/', (req, res) => {res.sendFile(homePath)});
app.get('/pageb', (req,res)=> {res.sendFile(pageBpath)});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
} );