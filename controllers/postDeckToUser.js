module.exports = makePostDeckToUser = (addDeckToUser) => {
    return postDeckToUser = async (http) => {
        try {
            console.log(http.user)
            const deck = http.body.deck
            const userId = http.user._id

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