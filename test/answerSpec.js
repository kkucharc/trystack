var expect = require("chai").expect;
var answers = require("../src/services/answer_service.js");

describe("Answers", function(){
	describe("#getAnswers()", function(){
		var results = answers.getAnswers(542270);
		expect(results).to.equal('lol')
	});
});