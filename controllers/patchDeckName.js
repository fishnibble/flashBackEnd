module.exports = makePatchDeckName = (edditDeckName) => {
    return patchDeckName = async (http) => {
        try {
            const newName  = http.body.newName;
            console.log(newName);
            
            const deckId  = http.body.deckId;
            const editName = await edditDeckName(deckId, newName);
            console.log(editName);
            

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: editName
            }
        } catch (e) {
        //     return {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: e
        //     }
        console.log(e);
        
        }

    }
}