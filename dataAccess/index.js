const User = require('./dataModels/index');
const userDb = require('./userDb');

module.exports = userDb(User);
