'use strict';
var config = require('../config/config');
var AnswerModel = require('../models/answer');

var getAnswers = exports.getAnswers = function(user) {
	let method = 'GET';
	let userUri = 'users/'
	let answerUri = '/answers/'
	let combinedUrl = config.url + userUri + user + answerUri;
	console.log(combinedUrl);

	let answersPromise = new Promise( function(resolve, reject){
		let client = new XMLHttpRequest();
		client.open(method, url);
		client.send();

		client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            // Performs the function "resolve" when this.status is equal to 2xx
            resolve(this.response);
          } else {
            // Performs the function "reject" when this.status is different than 2xx
            reject(this.statusText);
          }
        };

        client.onerror = function () {
          reject(this.statusText);
        };
	});

	answersPromise
		.then(function(buffer){
			return JSON.parse(buf.toString())
		})
		.then(function(data){

		})
		.then(null, console.error);

	var answer = new AnswerModel();
	console.log(answersPromise);
	return answersPromise;
};