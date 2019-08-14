module.exports = makeUpdateDeckName = (User) => {
    return updateDeckName = async (userId, deckId, newName) => {
        
        const user = await User.findUserById(userId);
        
        if(!user.decks.includes(deckId)) {
            return {
                error: 'invalid Id'
            }
        }

        return await User.updateDeckName(deckId, newName);
    }
}