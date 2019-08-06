module.exports = makeLogin = (User, comparePass, jwtSign, key) => {
    return login = async (username, password) => {

        const user = await User.findUserByName(username);

        if (!user) {
            return {
                error: 'User name not found'
            }
        }

        const isMatch = await comparePass(password, user.password);

        if (isMatch) {
            const payload = { id: user._id, username: user.username };
            const token = await jwtSign(payload, key, { expiresIn: 3600 });
            return {
                working: 'true',
                token: 'Bearer ' + token
            }
        } return {
            error: 'Password not valid'
        }
    }
}