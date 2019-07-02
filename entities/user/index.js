const buildMakeUser = require('./user');
const buildEncryptPassword = require('./encryptPassword');
const bcrypt = require('bcrypt')
const encryptPassword = buildEncryptPassword(bcrypt)
const makeUser = buildMakeUser(encryptPassword);

module.exports = makeUser;
