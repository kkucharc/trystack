'use strict';
var express = require('express');
var app = express();
var anwers = require('../services/answer_service');

var morgan = require('morgan');
var fs = require('fs')
var accessLogStream = fs.createWriteStream('./build/logs/access.log', {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function(request, response) {
   			response.send("Yo zią!");
 });

app.get('/opal', function(request, response) {
		console.log("try parse");
		var ans = anwers.getAnswers(542270)
			.then(function(data) {
	      		response.send(data);
	      		console.log('lol', data);
	    	}).catch(function(error) {
	    		response.status(503).send("Sorry. Can't parse data");
	      		console.log("send", error);
	   		});
 });

module.exports = app;