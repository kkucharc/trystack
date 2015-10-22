'use strict';
var express = require('express');
var app = express();
var anwers = require('../services/answer_service');
var morgan = require('morgan');
var fs = require('fs')
var accessLogStream = fs.createWriteStream(__dirname + '../../build/logs/access.log', {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function(request, response) {
   			response.send("Yo zią!");
 });

app.get('/opal', function(request, response) {
		
		anwers.getAnswers(542270).then(function(data){
			console.log("Kaka");
			console.log(data);

			response.send(data);
		});
   			
 });

module.exports = app;