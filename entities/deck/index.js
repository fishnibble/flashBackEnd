const makeBuildDeck = require('./deck');
const idHelper = require('../idHelper');
const buildDeck = makeBuildDeck(idHelper);
module.exports = buildDeck;