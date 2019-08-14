const makePostUser = require('./postuser');
const makePostLogin = require('./postLogin');
const makePostDeckToUser = require('./postdecktouser');
const makeCardsToDeck = require('./postcardtodeck');
const makePatchDeckName = require('./patchdeckname');
const makePatchCards = require('./patchCard');
const makeGetStudyDeck = require('./getstudydeck');
const makeDeleteDeck = require('./deletedeck');
const makeDeleteCards = require('./deletecards');
const User = require('../useCases/index');


const postUser = makePostUser(User.registerUser);
const postDeckToUser = makePostDeckToUser(User.makeDeck);
const postCardToDeck = makeCardsToDeck(User.addCardsToDeck);
const patchDeckName = makePatchDeckName(User.updateDeckName);
const getStudyDeck = makeGetStudyDeck(User.studyDeck);
const deleteDeck = makeDeleteDeck(User.removeDeck);
const deleteCards = makeDeleteCards(User.removeCards);
const patchCards = makePatchCards(User.editCards);
const postLogin = makePostLogin(User.userLogin);

const userControler = Object.freeze({
    postUser,
    postLogin,
    postDeckToUser,
    postCardToDeck,
    patchDeckName,
    patchCards,
    getStudyDeck,
    deleteCards,
    deleteDeck
});

module.exports = userControler