module.exports = makeStudyDeck = (studyDeck) => {
    return studyDeck = async (http) => {

        try {
            const deckId = http.body.deckId;
            const cards = await studyDeck.studyDeck(deckId);
            
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