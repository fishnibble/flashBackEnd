const userServie = require('./index');
const chai = require('chai');
const expect = chai.expect;
const ObjectId = require('mongoose').Types.ObjectId;

(async () => {
    const db = require('../db/index');
})();




/*
    Dummy data for user account
*/

const userData = {
    username: 'test123',
    email: 'test@test.com',
    password: '12345',
};

/*
    Dummy data for deck and card
*/

testCardData1 = {
    front: 'test1',
    back: 'test1'
 }

testCardData2 = {
    front: 'test2',
    back: 'test2'
 }

testDeckData = { 
    deckName: 'testing deck',
    cards: [testCardData1, testCardData2]
}


describe('Tests for useCases index.js', async () => {
    context('Testing functions', async () => {
        const newUser = await userServie.registerUser(userData);
        console.log(newUser);
        
    })
})