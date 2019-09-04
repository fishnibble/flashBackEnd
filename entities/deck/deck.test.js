const makeDeck = require('../deck/index')
const ObjectId = require('mongoose').Types.ObjectId;
const chai = require('chai');
const expect = chai.expect;



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

const testDeck = makeDeck(testDeckData)


describe('Tests for deck index.js', () => {
    context('Testing deck functions', () => {

        it('Retuns deck name', () => {
            expect(testDeck.getDeckName()).equal(testDeckData.deckName)
        })

        it('Retuns the cards in the deck', () => {
            const cards = testDeck.getCards()
            expect(cards[0].front).equals(testCardData1.front)
            expect(cards[0].back).equals(testCardData1.back)
            expect(cards[1].front).equals(testCardData2.front)
            expect(cards[1].back).equals(testCardData2.back)

        })

        it('Retuns the ID of the deck', () => {
            expect(ObjectId.isValid(testDeck.getId())).to.be.true
        })
    })
})