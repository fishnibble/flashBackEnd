module.exports = makeRemoveDeck = (User) => {
    return removeDeck = async (deckId, userId) => {

        const user = await User.findUserById(userId);

        if(!user.decks.includes(deckId)) {
            return {
                error: 'invalid ID'
            }
        }

        await User.removeDeck(deckId)
    }
}