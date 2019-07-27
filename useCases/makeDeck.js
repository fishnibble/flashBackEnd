const buildDeck = require('../entities/deck/index');
module.exports = makeBuildNewDeck = (User) => {
    return makeNewDeck = async (userId, deckInfo) => {
        console.log(deckInfo);
        
        const newDeck = buildDeck(deckInfo);
        
        return await User.addDeckToUser(userId, {
            _id: newDeck.getId(),
            deckName: newDeck.getDeckName(),
            cards: newDeck.getCards()
        });
    }
}