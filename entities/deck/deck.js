const buildCards = require('../card/index')

module.exports = buildMakeDeck = (idHelper) => {
    return makeDeck = ({
        deckName,
        cards,
        _id
    } = {}) => {
        if (!deckName) {
            throw new Error('Deck needs a title')
        }

        if (!cards) {
            throw new Error('Deck needs cards')
        }

        if ((_id)) {
            const validId = idHelper.checkId(_id)
            if(validId === false) {
                throw new Error('Invalid ID')
            } else {
                _id = validId
            }
        }

        if (!_id) {
            _id = idHelper.genId()
        }

        cards.map(card => {
            return buildCards(card);
        })

        return Object.freeze({
            getDeckName: () => deckName,
            getCards: () => cards,
            getId: () => _id
    })

    }
}