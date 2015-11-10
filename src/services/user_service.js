'use strict';
var User = require('../models/user').User;

var getUser = exports.getUser = function (user_id) {
  let method = 'GET';
  let userUri = 'users/';
  let site = config.site;
  let combinedUrl = config.url + userUri + user_id + '?site=' + site;

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

function checkUser(user_id) {
  let userJson = getUser(user_id);
  if (userJson || userJson.items) {
    return {
      username: userJson.items[0].display_name,
      user_id: user_id
    };
  }
}

exports.add = function (body) {
  console.log(body);
  if (!body || !body.user_id) {
    return {status: 409, user: null};
  } else {
    var fetchedUser = checkUser(body.user_id);
    if (!fetchedUser) {
      return {status: 404, user: null};
    } else {
      save(fetchedUser)
    }
  }
};

var save = exports.save = function (stackUser) {
  var kitty = new User({
    username: stackUser,
    user_id: 1234
  });
  console.log('Saving user %s', stackUser);
  kitty.save(function (err) {
    if (err) {
      console.log('Save error %s', err);
    }
  });
  return kitty;
};