const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if (err){
        console.log('Could Not connect to database: ', err);
    }else{
        console.log(config.secret);
        console.log('Connected to database: ', + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, function(){
    console.log('Listening on port 8080');
});