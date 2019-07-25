const makePostUser = require('./postuser');
const makePostDeckToUser = require('./postdecktouser');
const makeCardsToDeck = require('./postcardtodeck');
const makePatchDeckName = require('./patchdeckname');
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

const userControler = Object.freeze({
    postUser,
    postDeckToUser,
    postCardToDeck,
    patchDeckName,
    getStudyDeck,
    deleteCards,
    deleteDeck
});

module.exports = userControler