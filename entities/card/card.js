// prob want to sanitize text
module.exports = makeCard = ({
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

    return Object.freeze({
        getFront: () => front,
        getBack: () => back,
        getExampleText: () => exampleText
    })
}