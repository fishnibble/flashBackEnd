module.exports = makeStudyDeck = (User) => {
    return studyDeck = (userId, deckId) => {
        if(!User.findUserById(userId).decks.includes(deckId)) {
            return {
                error: 'invalid ID'
            }
        }
        return User.studyDeck(deckId);
    }
}