const helper = require('./helper');
const buildCard = require('../entities/card/index');
module.exports = makeAddCards = (User) => {
    return addCards = async (cardsInfo) => {
        if(await helper.checkUserName(cardsInfo, User)) {
            const newCard = buildCard(cardsInfo);
            User.insetCard(newCard);
        } 
    }
}