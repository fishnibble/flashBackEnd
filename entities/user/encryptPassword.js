module.exports = buildEncryptPassword = (bycrypt) => {
    return (password) => {
        return bycrypt.genSalt(10)
        .then(salt => {
            return bycrypt.hash(password, salt)
            .then(hash => {
                return hash
            })
        })
    }
}


