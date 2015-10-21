'use strict';
var answerModel = require('../models/Answer.js');

exports.getAnswers = function(user){
	let answersPromise = new Promise( function(resolve, reject){} );
	console.log(user);
	console.log(typeof answerModel);
	var answer = new answerModel();
	console.log(typeof answer);
	console.log(answer instanceof answerModel);
	console.log(answer.constructor.name)
	return 'lol';
} 