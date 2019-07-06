// prob want to sanitize text
module.exports = buildMakeCard = (md5) => {
    return makeCard = ({
        front,
        back,
        exampleText
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
        return Object.freeze({
            getFront: () => front,
            getBack: () => back,
            getExampleText: () => exampleText,
            getHash: () => hash || (hash = makeHash())
        })
    }
}