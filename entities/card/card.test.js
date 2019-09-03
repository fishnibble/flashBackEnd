const makeCard = require('./index');

const test = {
    front: 'test',
    back: 'test'
}

const newCard = makeCard(test)

console.log(newCard.getHash());
console.log(newCard.getFront());
console.log(newCard.getBack());
