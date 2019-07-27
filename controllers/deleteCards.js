module.exports = makeDeleteCards = (removeCards) => {
    return deleteCards = async (http) => {
        try {

            const cardsId = http.body.cardsId;

            const removedCards = await removeCards.removeCards(cardsId);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: removedCards
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