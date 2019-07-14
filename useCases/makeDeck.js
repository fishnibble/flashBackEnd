const buildDeck = require('../entities/deck/index');
const buildCard = require('../entities/card/index');
module.exports = makeBuildNewDeck = (User) => {
    return makeNewDeck = (userId, deckInfo, cardInfo) => {
        // make all the cards

        // add them to the deck

        // add deck to the user

        let cards;
        cardInfo.forEach(card => {
            const newCard = buildCard(card);
            cards.push(newCard);
        });

        const newDeck = buildDeck({
            deckName: deckInfo,
            cards: cards
        })

        let cardJson;
        newDeck.getCards.forEach(card => {
            const json = {
                front: card.getfront(),
                back: card.getBack(),
                _id: card.getId(),
                hash: card.getHash()
            }
            cardJson.push(json);
        })

        User.insertDeck(userId, {
            name: newDeck.getDeckName(),
            _id: newDeck.getId(),
            cards: cardJson
        })

        // might be a good idea to make the deck produce it's own json.
    }
}