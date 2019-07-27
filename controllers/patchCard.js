module.exports = makePatchCard = (edditCards) => {
    return patchCard = async (http) => {
        try {

            const updatedCards  = http.body.updatedCards;
            console.log(updatedCards);
            
            const changeCard = await edditCards(updatedCards);
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