var chai = require('chai');
global.expect = chai.expect;
var service = require('../src/services/user_service.js');
var User = require('../src/models/user').User;
//var mongoose = require('mongoose');
var db = require('../src/config/database').mongoose;
var connect = require('../src/config/database').connect;

describe('Setup db', function () {
  connect('test');
  User.remove({}, function (err) {
  });

  describe("UserService", function () {
    console.log("connection " + db.connection.readyState);

    service.save('Kaka');
    it("#saveUser", function () {
      var promise = User.find({'username': 'Kaka'}).exec();

      promise.then(function(user) {  // <- this is the Promise interface.
          console.log(user);
          expect(users.username).to.equal('Kaka');
        }, function(err) {
          console.log(err);
        });

      console.log(promise);
    });


    });


  after(function (done) {
    // Clear collection after testing to ensure it is pristine for other tests
    //User.remove({}, function (err) {
    //});
    db.connection.close();
    done();
  });

});