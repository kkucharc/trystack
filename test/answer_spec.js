var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
chai.use(require('chai-as-promised'));

var answers = require("../src/services/answer_service.js");
var answersStats = require("../src/services/answer_statistics_service.js");

var answersJson = {"items":
	[{
		"answer_id": 1234,
		"creation_date": 1445926893,
		"is_accepted": false,
		"last_activity_date": 1445926893,
		"owner": {
			"accept_rate": 88,
			"display_name": "Asdf",
			"link": "http://stackoverflow.com/users/542270/opal",
			"profile_image": "https://i.stack.imgur.com/DJlop.jpg?s=128&g=1",
			"reputation": 17847,
			"user_id": 1234,
			"user_type": "registered"
		},
		"question_id": 33358115,
		"score": 0
	},
	{
		"answer_id": 1235,
		"creation_date": 1445889902,
		"is_accepted": true,
		"last_activity_date": 1445898541,
		"last_edit_date": 1445898541,
		"owner": {
			"accept_rate": 88,
			"display_name": "Asdf",
			"link": "http://stackoverflow.com/users/542270/opal",
			"profile_image": "https://i.stack.imgur.com/DJlop.jpg?s=128&g=1",
			"reputation": 17847,
			"user_id": 1234,
			"user_type": "registered"
		},
		"question_id": 33354346,
		"score": 0
	}]
};


describe("Answers", function(){
	//var promise = answers.getAnswers(542270);
	//it("#getAnswersFullfilled", function(done){
	//	return promise.should.be.fulfilled.and.notify(done);
	//});
	// it("#getAnswersPropertiesOk", function(done){
	// 	return expect(promise).to.eventually.have.property("items").and.notify(done);
	// });
});


describe("AnswersStats", function(){
	var allAnswers = answersStats.countAnswers(answersJson),
		acceptedAnswers = answersStats.countAcceptedAnswers(answersJson);
	it("#countUserAnswers", function(){
		expect(allAnswers).to.be.equal(2);
	});
	it("#countUserAcceptedAnswers", function(){
		expect(acceptedAnswers).to.be.equal(1);
	});
});