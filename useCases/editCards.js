const buildCard = require('../entities/card/index');

module.exports = makeEditCards = (User) => {
    return editCards = (newCards) => {
        console.log(newCards);

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