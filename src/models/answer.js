'use strict';

class Answer {
	constructor(id, owner, questionId){
		this.id = id;
		this.owner = owner;
		this.questionId = questionId;
	}
}

module.exports = Answer;