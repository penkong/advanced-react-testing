//main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//......................................................
const app = express();
const router = require('./router');
//app setup.
app.use(morgan('combined')); //middle, login framework for debugging
app.use(bodyParser.json({type: '*/*'})); //middle to parse incoming req to json
router(app);




//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, console.log('listening'));