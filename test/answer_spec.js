var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
chai.use(require('chai-as-promised'));
var answers = require("../src/services/answer_service.js");

describe("Answers", function(){
	var promise = answers.getAnswers(542270);
	it("#getAnswersFullfilled", function(done){
		return promise.should.be.fulfilled.and.notify(done);
	});
	// it("#getAnswersPropertiesOk", function(done){
	// 	return expect(promise).to.eventually.have.property("items").and.notify(done);
	// });
});