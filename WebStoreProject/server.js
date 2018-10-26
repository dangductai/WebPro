"use strict";

const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine',"ejs");
app.set('views', path.join(__dirname, 'views'));
const port = 7777;

require('./routes')(app);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myDatabase');
let db = mongoose.connection;
db.once('open',function(){
	console.log('connected to database');
});
db.on('error',function(err){
	console.log("connect failed ! ",err);
});

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});