'use strict';
var express = require('express');
var app = express();
var anwers = require('../services/answer_service');
var users = require('../services/user_service');

var morgan = require('morgan');
var fs = require('fs');
var accessLogStream = fs.createWriteStream('./build/logs/access.log', {flags: 'a'});

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function (request, response) {
  response.send("Yo zią!");
});

app.get('/opal', function (request, response) {
  console.log("try parse");
  var ans = anwers.getAnswers(542270)
    .then(function (data) {
      return JSON.stringify(data);
    }, function (error) {
      return Error(error);
    })
    .then(function (data) {
      response.send(data);
    }).catch(function (error) {
      response.status(503).send("Sorry. Can't parse daa");
      console.log("send", error);
    });
});

app.get('/users', function (request, response) {
  var userArr = users.getAll();
  //if(!user.user){
  //  response.status(user.status).send("User does not exists on stackoverflow.");
  //}

    userArr.then(function (result) {
      console.log("result"+result);
      response.send(result.map(v => ({
        user_id: v._id,
        username: v.username}))
      );
    });

});

app.post('/users', function (request, response) {
  var user = users.add(request.body);
  if (!user.user) {
    response.status(user.status).send("User does not exists on stackoverflow.");
  }
  var responseMap = {
    user: {
      user_id: user.user_id,
      username: user.username
    }
  };
  console.log(responseMap);
  response.send(responseMap);
});

function packUsers(element, index, array) {
  return {
    user_id: element.user_id
  }
}

module.exports = app;