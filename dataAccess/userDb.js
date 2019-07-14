module.exports = makeUserDb = (Model) => {

    const findUserById = async (userId) => {
        return await Model.User.findById(userId);
    }

    const findCardById = async (cardId) => {
        return await Model.Card.findById(cardId);
    }

    const findDeckById = async(deckId) => {
        return await Model.Deck.findById(deckId)
    }

    // for testing !! 

    const dropDb = async () => {
        Model.User.collection.drop();
        Model.Card.collection.drop();
        Model.Deck.collection.drop();
    }

    const insertUser = async (newUser) => {
        const userToDb = await Model.User.create({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        });
        return userToDb;
    }

    const addDeckToUser = async (userId, passedDeck) => {
        let newCards = [];

        for (let index = 0; index < passedDeck.cards.length; index++) {
            const card = passedDeck.cards[index];
            newCards.push(await Model.Card.create({
                _id: card._id,
                front: card.front,
                back: card.back,
                example: card.example
            }))

        }

        console.log(newCards);


        const newDeck = await Model.Deck.create({
            _id: passedDeck._id,
            name: passedDeck.name,
            cards: newCards
        })
        const user = await Model.User.findById(userId)
        await user.decks.push(newDeck)
        await user.save()
        return user.decks
    }

    const addCardsToDeck = async (deckId, passedCards) => {
        const deck = await Model.Deck.findById(deckId);

        for (let index = 0; index < passedCards.length; index++) {
            const card = passedCards[index];
            await deck.cards.push(await Model.Card.create({
                _id: card._id,
                front: card.front,
                back: card.back,
                example: card.example
            }))
        }
        await deck.save()
        return deck
    }

    const updateDeckName = async (deckId, newName) => {
        return await Model.Deck.findOneAndUpdate({_id: deckId}, {
            $set: {name: newName}
        })
    }

    const updateCards = async (updatedCards) => {
        for (let index = 0; index < updatedCards.length; index++) {
            const card = updatedCards[index];
            await Model.Card.findOneAndUpdate({_id: card._id},
                {
                    $set: {front: card.front, back: card.back, example: card.exampleText}
                })
        }
        return {'Status': 'ok'}
    }

    const studyDeck = async (deckId) => {
        return await Model.Deck.findById(deckId)
        .populate('cards')
    }

    const removeDeck = async (deckId) => {
        const deck = await Model.Deck.findById(deckId)
        for (let index = 0; index < deck.cards.length; index++) {
            const card = deck.cards[index];
            await Model.Card.findOneAndRemove({_id: card})
        }
        await deck.remove()
        await deck.save()
    }

    const removeCards = async (cardIds) => {
        for (let index = 0; index < cardIds.length; index++) {
            const cardId = cardIds[index];
            Model.Card.findOneAndRemove({_id: cardId})
        }
    }

        return Object.freeze({
            insertUser,
            addDeckToUser,
            addDeckToUser,
            addCardsToDeck,
            updateDeckName,
            updateCards,
            removeDeck,
            removeCards,
            findCardById,
            findUserById,
            findDeckById,
            studyDeck,
            dropDb
        })
    }