'use strict';

var app = require('./entrypoints/routes.js');

var server = app.listen(8082, function(){
   var host = server.address().address;
   var port = server.address().port;

   console.log("Listening at http://%s:%s", host, port);
});