module.exports = makePostDeckToUser = (addDeckToUser) => {
    return postDeckToUser = async (http) => {
        try {
            const deck = {
                deckName: http.body.deckName,
                cards: JSON.parse(http.body.cards)
            }
            
            const userId = http.body.userId

            const postDeckToUser = await addDeckToUser(userId, deck);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: postDeckToUser
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