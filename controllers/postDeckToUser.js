module.exports = makePostDeckToUser = (addDeckToUser) => {
    return postDeckToUser = async (http) => {
        try {
            const { deck } = http.body.deck;
            const { userId } = http.body.userId;

            const postDeckToUser = await addDeckToUser.addDeckToUser(userId, deck);

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
                body: { e }
            }
        }

    }
}