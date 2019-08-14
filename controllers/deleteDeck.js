module.exports = makeDeleteDeck = (removeDeck) => {
    return deleteDeck = async (http) => {

        try {
            const deckId = http.body.deckId;
            const userId = http.user._id

            const delDeck = await removeDeck.removeDeck(userId, deckId);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: delDeck
            }
        } catch (e) {
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: e
            }
        }
    }
}