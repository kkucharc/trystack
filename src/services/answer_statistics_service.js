'use strict';

var countAnswers = exports.countAnswers = function (answersJson) {
  return answersJson.items.length
};

var countAcceptedAnswers = exports.countAcceptedAnswers = function (answersJson) {
  return answersJson.items.filter( value => value.is_accepted === true).length
};

var countPercentage = function (map) {

};

var getPercentage = function (answersMap) {
  let allCount = 0;
  allCount += answersMap.forEach(function (e) {
    e.lenght
  });

  let percentageMap = answersMap.forEach(countPercentage);
};
