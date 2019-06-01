//main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//......................................................
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//db setup
mongoose.connect('mongodb://127.0.0.1:27017/auth', {
  useNewUrlParser: true
})
//app setup.
app.use(morgan('combined')); //middle, login framework for debugging
app.use(cors());
app.use(bodyParser.json({type: '*/*'})); //middle to parse incoming req to json
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, console.log('listening'));