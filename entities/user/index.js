const buildMakeUser = require('./user');
const buildEncryptPassword = require('./encryptPassword');
const bcrypt = require('bcrypt')
const encryptPassword = buildEncryptPassword(bcrypt)
const idHelper = require('../idHelper');
const makeUser = buildMakeUser(encryptPassword, idHelper);

module.exports = makeUser;
