const buildCard = require('../entities/card/index');
module.exports = makeAddCards = (User) => {
    return addCards = async (deckId, cardsInfo) => {
   
        return await User.addCardsToDeck(deckId, cardsInfo.map(card => {
            const newCard = buildCard(card);
            return {
                _id: newCard.getId(),
                front: newCard.getFront(),
                back: newCard.getBack(),
                example: newCard.getExampleText()
            }
        }))
    }
}