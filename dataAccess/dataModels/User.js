const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    decks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Deck'}]
});

const deckSchema = new mongoose.Schema({
    name: { type: String, require: true },
    cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]
});

const cardSchema = new mongoose.Schema({
    front: { type: String },
    back: { type: String },
    example: [{ type: String }]
});

const User = mongoose.model('User', userSchema);
const Card = mongoose.model('Card', cardSchema);
const Deck = mongoose.model('Deck', deckSchema);
module.exports = {User, Card, Deck}