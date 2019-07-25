module.exports = makePostCardToDeck = (addCardToDeck) => {
    return postCardToDeck = async (http) => {
        try {

            const { cards } = http.body.card;
            const { deckId } = http.body.deckId;

            const addCard = await addCardToDeck.addCardToDeck(deckId, cards);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: addCard
            }
        } catch (e) {

            return {

                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                error: { e }
            }
        }
    }
}