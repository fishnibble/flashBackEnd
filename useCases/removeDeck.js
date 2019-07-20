module.exports = makeRemoveCards = (User) => {
    return removeDeck = async (deckId) => {
        await User.removeDeck(deckId)
    }
}