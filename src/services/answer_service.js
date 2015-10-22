'use strict';
var config = require('../config/config');
var AnswerModel = require('../models/answer');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var getAnswers = exports.getAnswers = function(user) {
	let method = 'GET';
	let userUri = 'users/'
	let answerUri = '/answers/'
	let site = config.site;
	let combinedUrl = config.url + userUri + user + answerUri + '?site=' + site;
	console.log(combinedUrl);

	var answer = new AnswerModel();


	return new Promise( function(resolve, reject){
		let client = new XMLHttpRequest();
		client.open(method, combinedUrl);
		client.send();

		client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            console.log("2XX");
            resolve(this.response);
          } else {
            console.log("Reject");
            reject(Error(this.statusText));
          }
        };

        client.onerror = function () {
          reject(Error("Huston we've got problem!"));
        };  
	}).then(function(buffer){
			console.log("Success", buffer);
			//return JSON.parse(buffer.toString())
	}, function(err) {
			console.log("Error", err);	
	});
};