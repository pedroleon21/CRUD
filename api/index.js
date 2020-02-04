const express =('express')
const restfull = require('node_restfull')
const server = express()
const bodyParser = require('body-parser');

const mongoose = resful.mongoose

server.use(bodyPaser.json());
server.use(bodyPaser.urlencoded({ extended: false}))

require('./controler/authConroler')(app);

server.listen(9000);