const buildCard = require('../entities/card/index');

module.exports = makeEditCards = (User) => {
    return editCards = async (userId, deckId, newCards) => {
        
        const user = await User.findCardById(userId);
        const deck = await User.findDeckById(deckId)

        if(!user.cards.includes(deckId)) {
            return {
                error: 'Invalid Id'
            }
        }

        const hasCards = newCards.every(id => deck.cards.includes(id));

        if(!hasCards) {
            return {
                error: 'invalid Id'
            }
        }
        

        if(user.decks.populate())

        newCards.map(card => {
            const newCard = buildCard(card);
            return {
                _id: newCard.getId(),
                font: newCard.getFront(),
                back: newCard.getBack(),
                example: newCard.getExampleText()
            }
        })
        return User.updateCards(newCards);
    }
}