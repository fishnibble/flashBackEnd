const mongoose = require('mongoose')

const idHelper = {
    checkId: (text) => {
        if((typeof _id ===! 'string')) {
            return false
        }
        const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        if(text.match(checkForHexRegExp)) {
            return new mongoose.mongo.ObjectId(text)
        } 
    },

    genId: () => {
        return new mongoose.mongo.ObjectId()
    }
}

module.exports = idHelper