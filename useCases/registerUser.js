const makeUser = require('../entities/user/index');
module.exports = makeBuildRegisterUser = (User) => {
    return registerUser = async (userInfo) => {
        console.log('registerUser ' + userInfo);
        
        const newUser = await makeUser(userInfo);
        
        const exists = await User.findUserByName(newUser.getUserName())
        if (exists) {
            return {
                error: 'User exits',
                exists
            };
        }
        return User.insertUser({
            _id: newUser.getId(),
            username: newUser.getUserName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
        });
    }
}