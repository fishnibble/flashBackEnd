const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    front: { type: String },
    back: { type: String },
    example: [{ type: String }]
})