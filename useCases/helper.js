module.exports = helper = () => {
    checkUserName = async (username, User) => {
        return await User.findUserByUsername(username);
    }
} 