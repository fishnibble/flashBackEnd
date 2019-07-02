module.exports = buildMakeUser = (encryptPassword) => {
    return makeUser = async ({
        username,
        email,
        password,
        decks
    } = {}) => {

        if (!username) {
            throw new Error('Username is required');
        }

        if (!email) {
            throw new Error('Email is required');
        }

        if (!password) {
            throw new Error('Password is required');
        }

        if (username.length < 4) {
            throw new Error('Username needs to be greater then 4');
        }

        if (password.length < 5) {
            throw new Error('Password needs to be greather then 5');
        }


        const encryptedPassword = await encryptPassword(password);


        return Object.freeze({
            getUserName: () => username,
            getEmail: () => email,
            getPassword: () => encryptedPassword,
            getDecks: () => decks
        });

    }
}