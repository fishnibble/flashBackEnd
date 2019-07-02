const makeUser = require('../entities/user/index');
module.exports = makeBuildRegisterUser = (User) => {
    return registerUser = async (userInfo) => {
        const exists = await User.findUserByUsername(userInfo.username);
        if (doesUserExist) {
            return exists;
        }
        const newUser = await makeUser(userInfo);
        return User.insertUser(newUser);
    }
}