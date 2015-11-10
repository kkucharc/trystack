'use strict';
var db = require('../src/config/database');
var app = require('./entrypoints/routes.js');

var server = app.listen(8081, function(){
   var host = server.address().address;
   var port = server.address().port;

   db.connect('test');

   console.log("Listening at http://%s:%s", host, port);
});