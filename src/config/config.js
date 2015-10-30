'use strict';
var config = {},
  database = {};

config.url = 'https://api.stackexchange.com/';
config.site = 'stackoverflow';

database.url = '192.168.59.103';
database.name = 'stack';

database.test_url = '192.168.59.103';

exports.config = config;
exports.database = database;

