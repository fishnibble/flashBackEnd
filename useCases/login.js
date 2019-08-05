module.exports = makeLogin = (User, comparePass, jwtSign) => {
    return login = async(username, password) => {

        const user = await User.byUserName(username);
        if(!user) {
            throw new Error('User name not found')
        }

        const isMatch = await comparePass(password, user.password);
        if(isMatch) {
            const payload = {id: user._id, username: user.userName};
            const token = await jwtSign(payload, key, {expiresIn: 3600});
            return {
                working: 'true',
                token: 'Bearer ' + token
            }
        } else {
            return new Error('Password not valid');
        }
    }
}