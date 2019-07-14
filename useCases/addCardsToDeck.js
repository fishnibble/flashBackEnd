const buildCard = require('../entities/card/index');
module.exports = makeAddCards = (User) => {
    return addCards = async (deckId, cardsInfo) => {
        const newCard = buildCard(cardsInfo);
        User.insertCard(deckId, {
            front: newCard.getFront(),
            back: newCard.getBack(),
            _id: newCard.getId(),
            hash: newCard.getHash()
        })
    }
}