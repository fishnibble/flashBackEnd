const makeUser = require('./index');

const user = {
    username: 'test123',
    email: 'test@test.com',
    password: '12345',
    decks: null
};


(async () => {
    const newUser = await makeUser(user);
    console.log({username: newUser.getUserName(), email: newUser.getEmail(), password: newUser.getPassword()});
})()