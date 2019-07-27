module.exports = makeUpdateDeckName = (User) => {
    return updateDeckName = async (deckId, newName) => {
        return await User.updateDeckName(deckId, newName)
    }
}