module.exports = makeUpdateDeckName = (User) => {
    return updateDeckName = (deckId, newName) => {
        User.updateDeckName(deckId, newName)
    }
}