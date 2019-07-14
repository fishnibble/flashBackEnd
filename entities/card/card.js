// prob want to sanitize text
module.exports = buildMakeCard = (md5, idHelper) => {
    return makeCard = ({
        front,
        back,
        exampleText,
        _id
    } = {}) => {
        if (!front) {
            throw new Error('Front of card needs text')
        }

        if (!back) {
            throw new Error('Back of card needs text')
        }

        let hash;

        const makeHash = () => {
            return md5(front + back)
        }

        if ((_id)) {
            const validId = idHelper.checkId(_id)
            if(validId === false) {
                throw new Error('Invalid ID')
            } else {
                _id = validId
            }
        }

        if (!_id) {
            _id = idHelper.genId()
        }

        return Object.freeze({
            getFront: () => front,
            getBack: () => back,
            getExampleText: () => exampleText,
            getHash: () => hash || (hash = makeHash()),
            getId: () => _id
        })
    }
}