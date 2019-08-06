module.exports = makePatchDeckName = (edditDeckName) => {
    return patchDeckName = async (http) => {
        try {

            const newName  = http.body.newName;
            const deckId  = http.body.deckId;
            const editName = await edditDeckName(deckId, newName);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: editName,
                statusCode: 202
            }
        } catch (e) {
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: e
            }
        }
    }
}