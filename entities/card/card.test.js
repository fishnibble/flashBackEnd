const makeCard = require('./index');
const ObjectId = require('mongoose').Types.ObjectId;
const chai = require('chai');
const expect = chai.expect;

const test = {
    front: 'test',
    back: 'test',
    exampleText: 'test'
}

const newCard = makeCard(test);

describe('Tests for card index.js', () => {
    context('Testing card functions', () => {
        it('Returns front text of the card', () => {
            const newCard = makeCard(test);
            expect(newCard.getFront()).equals(test.front)
        })

        it('Retuns back text of the card', () => {
            const newCard = makeCard(test)
            expect(newCard.getBack()).equals(test.back)
        })

        it('Retuns example text from the card', () => {
            const newCard = makeCard(test)
            expect(newCard.getExampleText()).equals(test.exampleText)
        })

        it('Retuns ID of the card', () => {
            const newCard = makeCard(test)
            expect(ObjectId.isValid(newCard.getId())).to.be.true
        })
    })
})