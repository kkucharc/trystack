'use strict';
var config = require('../config/config');
var AnswerModel = require('../models/answer');
var request = require('request')

var getAnswers = exports.getAnswers = function(user) {
	let method = 'GET';
	let userUri = 'users/'
	let answerUri = '/answers/'
	let site = config.site;
	let combinedUrl = config.url + userUri + user + answerUri + '?site=' + site;
	console.log(combinedUrl);

	var answer = new AnswerModel();

	return new Promise( function(resolve, reject){
		request( {
			uri: combinedUrl,
			method: 'GET',
			gzip: true
		}, function (error, response, body) {
			debugger;
			if(!error && response.status >= 200 && response.status < 300){
				console.log("Success");
				resolve(body);
			} else {
				console.log("Reject");
				reject(Error(error));
			}
		});
	})
	.then(
		function(data) {
      		JSON.parse(data);
  		}, function(error) {
      		Error(error);
   		}
   	);
};