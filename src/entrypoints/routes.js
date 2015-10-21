'use strict';
var express = require('express');
var app = express();
var anwers = require('../services/anwer_service')

app.get('/', function(request, response) {
   			response.send("Yo zią!");
 });

app.get('/opal', function(request, response) {
		anwers.getAnswers().get.then
   			response.send("Kupa!");
 });

module.exports = app;