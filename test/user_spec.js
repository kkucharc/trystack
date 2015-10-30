var chai = require('chai');
global.expect = chai.expect;
var service = require('../src/services/user_service.js');
var User = require('../src/models/user').User;
var mongoose = require('mongoose');
var db = require('../src/config/database');

describe('Setup db', function () {
  db.connect('test');
  User.remove({}, function (err) {
  });

  describe("UserService", function () {
    service.save('Kaka');
    console.log("connection1 " + mongoose.connection.readyState);
    var foundUser = User.find({username: /^Kaka/});
    it("#saveUser", function () {
      expect(foundUser.username).to.equal('Kaka');
      done();
    });
  });

  after(function (done) {
    // Clear collection after testing to ensure it is pristine for other tests
    User.remove({}, function (err) {
    });
    mongoose.connection.close();
    done();
  });

});