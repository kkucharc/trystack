var expect = require("chai").expect;
var answers = require("../src/services/answer_service.js");

describe("Answers", function(){
	it("#getAnswers()", function(done){
		var results = answers.getAnswers(542270);
		expect(results).equal('lol');
	});
});