var chai = require('chai');
global.expect = chai.expect;
var service = require('../src/services/user_service.js');
var User = require('../src/models/user').User;
//var mongoose = require('mongoose');
var db = require('../src/config/database').mongoose;
var connect = require('../src/config/database').connect;

describe('Setup db', function () {
  before(function() {
    connect('test');
    User.remove({}, function (err) {
      if (err) {
        console.log('Problem with remove all users %s', err);
      }
    });

  });

  describe("UserService", function () {
    service.save('Kaka');

    it("#saveUser", function (done) {
      User.find({'username': 'Kaka'}).
        exec().
        then(function (user) {  // <- this is the Promise interface.
          console.log("Username %s", user);
          expect(user.username).to.equal('Kaka');
          done();
        }, function (err) {
          console.log("Promise error %s", err);
          done(err);
        });
    });

  });

  after(function (done) {
  //  db.connection.close();
    done();
  });

});