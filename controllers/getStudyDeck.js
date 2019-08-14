module.exports = makeStudyDeck = (studyDeck) => {
    return studyDeck = async (http) => {

        try {
            const deckId = http.body.deckId;
            const userId = http.user._id
            const cards = await studyDeck.studyDeck(userId, deckId);
            
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: cards
            }

        } catch(e) {

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: e
            }
        }
    }
}