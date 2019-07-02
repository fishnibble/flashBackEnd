const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    decks: [{
        name: {type: String, require: true},
        cards: [{
            front: {type: String, require: true},
            back: {type: String, require: true},
            example: [{type: String}]
        }]
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;