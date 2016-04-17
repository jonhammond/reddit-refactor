var config = {};
// var flask = require('flask');

config.mongoURI = {
  development: 'mongodb://localhost/reddit-mean-app',
  test: 'mongodb://localhost/reddit-mean-app-testing',
  production: process.env.MONGODB_URI
};

config.SALT_WORK_FACTOR = 10;

config.TOKEN_SECRET = 'xb1\xbc\xf96g:;\x15\x8e\x9f,Z\n\xe6\x11\x16\x16\xdb:L\x83B\x19\x9e';

module.exports = config;
