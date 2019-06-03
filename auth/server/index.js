//main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
//......................................................
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

//----------------db setup
mongoose.connect('mongodb://127.0.0.1:27017/auth', {
  useNewUrlParser: true
})
//---------------app setup.
//all req pass to morgan and body parser
//middle, login framework == show login info of req, for debugging
app.use(morgan('combined')); 
app.use(cors());
//middle to parse incoming req to json
app.use(bodyParser.json({type: '*/*'})); 
router(app);

//----------------server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('listening');