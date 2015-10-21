'use strict';
var express = require('express');
var app = express();

app.get('/', function(request, response) {
   			response.send("Yo zią!");
 });

app.get('/kupa', function(request, response) {
   			response.send("Kupa!");
 });

module.exports = app;