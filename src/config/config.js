'use strict';
var config = {},
  database = {};

config.url = 'https://api.stackexchange.com/';
config.site = 'stackoverflow';

database.url = '192.168.99.100';
database.name = 'stack';

database.test_url = '192.168.99.100';

exports.config = config;
exports.database = database;

