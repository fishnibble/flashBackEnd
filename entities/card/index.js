const cryto = require('crypto')
const cardMakeBuild = require('./card');
const idHelper = require('../idHelper');

const md5 = (text) => {
    return cryto.createHash('md5')
        .update(text, 'utf8')
        .digest('hex')
}

const makeCard = cardMakeBuild(md5, idHelper);
module.exports = makeCard;