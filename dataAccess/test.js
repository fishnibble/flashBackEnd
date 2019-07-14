const User = require('./index')
const buildUser = require('../entities/user/index');
const buildDeck = require('../entities/deck/index');
const buildCard = require('../entities/card/index');
const db = require('../db/index');


const testuser1 = {
    username: 'test1',
    email: 'test1',
    password: 'test1'
}

const testuser2 = {
    username: 'test2',
    email: 'test2',
    password: 'test2'
}

const testuser3 = {
    username: 'test3',
    email: 'test3',
    password: 'test3'
}


const testcard1 = {
    front: 'ok',
    back: 'kk'
}

const testcard2 = {
    front: '123',
    back: '456'
}
const newCard1 = buildCard(testcard1);
const newcard2 = buildCard(testcard2);
let newCards = [newCard1, newcard2];

const testcard3 = {
    front: 'test123',
    back: 'test456'
}
const testcard4 = {
    front: 'test789',
    back: 'test 10 11 12'
}
let newNewcards = []
const newCard3 = buildCard(testcard3);
const newCard4 = buildCard(testcard4);
newNewcards.push(newCard3, newCard4)
const testdeck = {
    deckName: 'test',
    cards: newCards
}
const newDeck = buildDeck(testdeck);



(async () => {
    User.dropDb()
    const newUser1 = await buildUser(testuser1);
    const newUser2 = await buildUser(testuser2);
    const newUser3 = await buildUser(testuser3);
    console.log('adding new user');
    const test1 =  {
        _id: newUser1.getId(),
        username: newUser1.getUserName(),
        email: newUser1.getEmail(),
        password: newUser1.getPassword(),
    };
    
    const test2 =  {
        _id: newUser2.getId(),
        username: newUser2.getUserName(),
        email: newUser2.getEmail(),
        password: newUser2.getPassword(),
    };
    const test3 =  {
        _id: newUser3.getId(),
        username: newUser3.getUserName(),
        email: newUser3.getEmail(),
        password: newUser3.getPassword(),
    };

    const testInstertUser1 = await User.insertUser(test1);
    const testInstertUser2 = await User.insertUser(test2);
    const testInstertUser3 = await User.insertUser(test3);


    console.log(testInstertUser1);

    const test = newDeck.getCards();

    const addDeck = await User.addDeckToUser(test1._id, {
        _id: newDeck.getId(),
        name: newDeck.getDeckName(),
        cards: newCards.map(card => {
            return {
                _id: card.getId(),
                front: card.getFront(),
                back: card.getBack(),
                example: card.getExampleText()
            }
        })
    })
    
    console.log(await addDeck)

    
    console.log(test[0].getId())
    getCard = await User.findCardById(test[0].getId())
    console.log(await getCard);
    

    const addCardsToDeck = await User.addCardsToDeck(newDeck.getId(), newNewcards.map(card => {
        return {
            _id: card.getId(),
            front: card.getFront(),
            back: card.getBack(),
            example: card.getExampleText()
        }
    }))

    console.log(addCardsToDeck);

    const updateDeckName = await User.updateDeckName(newDeck.getId(), 'I changed the name!!')
    
    console.log(updateDeckName)
    
    const updateCards = await User.updateCards(newNewcards.map(card => {
        return {
            _id: card.getId(),
            front: 'WOW',
            back: 'UPDATE WORKS'
        }
    }))

    const studyDeck = await User.studyDeck(newDeck.getId())
    console.log(studyDeck)

    User.removeDeck(newDeck.getId())

})();