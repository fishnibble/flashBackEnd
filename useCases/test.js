const userServie = require('./index');
const db = require('../db/index');

(async () => {
    const rawUser = {
        username: 'test12345',
        email: 'test1@test.com',
        password: '12345',
    };

    const rawDeck = {
        deckName: 'test',
        cards: [
            {
                front: 'test1',
                back: 'test1'
            },
            {
                front: 'test2',
                back: 'test2'
            }
        ]
    }

    const newCards = {
        cards: [
            {
                front: 'new1',
                back: 'new2'
            },
            {
                front: 'new2',
                back: 'new2'
            }
        ]
    }

    const editCard = [{
        _id: '5d331d701c38e702f63bd168',
        front: 'edddittt',
        back: 'gotem'
    }]

    // const register = await userServie.registerUser(rawUser);
    
    // console.log(register);

    // not working
    const makeDeck = await userServie.makeDeck('5d331d240f74ee02e9c944d9', rawDeck);
    
    // const addCardsToDeck = await userServie.addCardsToDeck('5d331d701c38e702f63bd165', newCards.cards)
    // console.log(addCardsToDeck);
    
    // const newName = await userServie.updateDeckName('5d331d701c38e702f63bd165', 'updatedname');

    // const editCards = await userServie.editCards(editCard);

    // const removeCards = await userServie.removeCards(['5d331d701c38e702f63bd168']);
    // console.log(removeCards);
    
    // const removeDeck = await userServie.removeDeck('5d331d8ad991380303660e7c')
    // console.log(removeDeck);
    
})();

// userServie.removeDeck()

