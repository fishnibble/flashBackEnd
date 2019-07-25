module.exports = makePatchCard = (edditCards) => {
    return patchCard = async (http) => {
        try {

            const { updatedCard } = http.body.updatedCard;
            const { cardId } = http.body.cardId;
            const changeCard = await edditCards.edditCards(cardId, updatedCard);
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