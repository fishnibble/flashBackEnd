// prob want to sanitize title

module.exports = makeDeck = ({
deckName,
cards
} = {}) => {
    if(!deckName) {
        throw new Error('Deck needs a title')
    }

    if(!cards) {
        throw new Error('Deck needs cards')
    }

    return Object.freeze({
        getDeckName: () => deckName,
        getCards: () => cards
    })
}