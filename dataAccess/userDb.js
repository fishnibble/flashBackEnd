module.exports = makeUserDb = (User) => {

    const findUserByUsername = async (passedUser) => {
        return User.findOne({ username: passedUser.getUserName() })
    }

    // for testing !! 

    const dropDb = async () => {
        User.collection.drop()
    }

    const findUsersDeck = async (passedUser, deckname) => {
        const deck = await User.find({username: passedUser.getUserName()})
        .select({'decks': {$elemMatch: {name: deckname}}});
        return await deck[0].decks
    }

    const insertUser = async (newUser) => {
        const userToDb = await User.create({
            username: newUser.getUserName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()

        });
        return await userToDb;
    }

    const insertDeck = async (passedUser, passedDeck) => {
        const user = await User.findOne({ username: passedUser.getUserName() });
        await user.decks.push({
            name: passedDeck.getDeckName(),
            cards: passedDeck.getCards()
        });
        await user.save();
        return await user.decks;
    }

    // need to fix to go with our entitie structue
    const insertCard = async (passedUser, passedDeck, passedCard) => {

        return await User.updateOne({ username: passedUser.getUserName(), 'decks.name': passedDeck.getDeckName() },
            {
                $push: {
                    'decks.$.cards': {
                        front: passedCard.getFront(),
                        back: passedCard.getBack(),
                    }
                }
            });
    }

    const removeDeck = async (passedUser, deckname) => {
        const user = await User.findOneAndUpdate(
            { username: passedUser.getUserName() },
            {
                $pull: { decks: { name: deckname } },
            }
        )
        await user.save();
        return await user;
    }

    const removeCard = async () => {
        
    }

    // edit card

    const updateCard = async (passedCard, deckname, updatedText) => {
        const updatedCard = await User.findOneAndUpdate()
    }

    return Object.freeze({
        findUserByUsername,
        findUsersDeck,
        insertUser,
        insertDeck,
        insertCard,
        removeDeck,
        dropDb
    })
}