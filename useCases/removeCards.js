module.exports = makeRemoveCard = (User) => {
    return removeCard = async (cardsId) => {
        return await User.removeCards(cardsId)
    }
}