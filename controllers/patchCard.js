module.exports = makePatchCard = (edditCards) => {
    return patchCard = async (http) => {
        try {

            const deckId = http.body.deckId
            const updatedCards  = http.body.updatedCards;
            const userId = http.user._id;

            const changeCard = await edditCards(userId, deckId, updatedCards);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: changeCard
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