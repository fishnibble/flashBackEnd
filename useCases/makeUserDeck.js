/*
    Might be a good idea to do it based on their toekn?
*/

const makeDeck = require('../entities/deck');
module.exports = buildMakeUserDeck = (User) => {
    return makeUserDeck = async (deckInfo) => {
        if(User.findUserByUsername(deckInfo.user)) {
            const newDeck = makeDeck(deckInfo);
            User.insetDek(newDeck);
        } else {
            throw new Error("Username not found")
        }

    }
} 