const makeBuildRegisterUser = require('./registerUser');
const makeBuildDeck = require('./makeDeck');
const makeBuildAddCardsToDeck = require('./addCardsToDeck');
const makeBuildUpdateDeckName = require('./updateDeckName');
const makeBuildEditCards = require('./editCards');
const makeBuildRemoveDeck = require('./removeDeck');
const makeBuildRemoveCards = require('./removeCards');
const makeStudyDeck = require('./studyDeck');
const User = require('../dataAccess/index');


const registerUser = makeBuildRegisterUser(User);
const makeDeck = makeBuildDeck(User);
const addCardsToDeck = makeBuildAddCardsToDeck(User);
const updateDeckName = makeBuildUpdateDeckName(User);
const editCards = makeBuildEditCards(User);
const removeDeck = makeBuildRemoveDeck(User);
const removeCards = makeBuildRemoveCards(User);
const studyDeck = makeStudyDeck(User)

const userService = Object.freeze({
    registerUser,
    makeDeck,
    addCardsToDeck,
    updateDeckName,
    editCards,
    removeDeck,
    removeCards,
    studyDeck
})

module.exports = userService