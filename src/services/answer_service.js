'use strict';
var config = require('../config/config').config;
var AnswerModel = require('../models/answer');
var request = require('request');

var getAnswersByUser = exports.getAnswers = function (user) {
  let method = 'GET';
  let userUri = 'users/';
  let answerUri = '/answers/';
  let site = config.site;
  let combinedUrl = config.url + userUri + user + answerUri + '?site=' + site;

  return new Promise(function (resolve, reject) {
    request({
      uri: combinedUrl,
      method: method,
      gzip: true
    }, function (error, response, body) {

      if (error) {
        console.log("failed ", error);
        reject(Error(error));
      }
      else if (response.status < 200 && response.status > 300) {
        console.log("HTTP error ", response.status);
        reject(Error(error));
      } else {
        console.log("Success");
        debugger;
        resolve(body);
      }
    });
  })
    .then(
    function (data) {
      return JSON.parse(data);
    }, function (error) {
      return Error(error);
    }
  )

};


var createModel = function (promise) {
  var answer = new AnswerModel();

  promise
    .then(
    function (data) {
      let items = data['items'];
      let answers = new Set();
      for (let it of items) {
        //console.log("%s %s %s", it['answer_id'], it['owner']['user_id'], it['question_id']);
        let a = new AnswerModel({id: it['answer_id'], owner: it['owner']['user_id'], questionId: it['question_id']});
        console.log(a);
        answers.add(a);

      }
      //console.log(answers.size)
      return answers;
    }, function (error) {
      return (Error(error));
    }
  )
};