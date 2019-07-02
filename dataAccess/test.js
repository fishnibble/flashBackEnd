const db = require('../db/index');
const User = require('./index')
const buildUser = require('../entities/user/index');
const buildDeck = require('../entities/deck/index');
const buildCard = require('../entities/card/index');


const testuser = {
    username: 'test1',
    email: 'test2',
    password: 'test3'
}

const testdeck = {
    deckName: 'test',
    cards: [{
        front: 'test',
        back: 'test'
    }]
}

const testcard = {
    front: 'ok',
    back: 'kk'
}

const newUser = buildUser(testuser);
const newDeck = buildDeck(testdeck);
const newCard = buildCard(testcard);

(async () => {
    User.dropDb();
    const newUser = await buildUser(testuser);
    const newDeck = buildDeck(testdeck)
    const newCard = buildCard(testcard);
    const newDbUser = await User.insertUser(newUser);
    console.log(await newDbUser, " \ninsert user test");
    const newDbDeck = await User.insertDeck(newUser, newDeck);
    console.log(await newDbDeck, " \n insert deck test");
    const newDbCard = await User.insertCard(newUser, newDeck, newCard);
    console.log(await newDbCard, " \n insert card test");
    const getUserFromDb = await User.findUserByUsername(newUser);
    console.log(await getUserFromDb, " \n find user by username test");
    const newUsersDeck = await User.findUsersDeck(newUser, "test");
    console.log(await newUsersDeck, " \n get users deck test");
})();