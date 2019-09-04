const makeUser = require('./index');
const chai = require('chai');
const expect = chai.expect;
const ObjectId = require('mongoose').Types.ObjectId;

const user = {
    username: 'test123',
    email: 'test@test.com',
    password: '12345',
};

describe('Tests for user index.js', () => {
    context('Testing user functions', () => {
        it('Returns username', async () => {
            const newUser = await makeUser(user);
            expect(newUser.getUserName()).to.equal(user.username)
        })

        it('Returns email', async () => {
            const newUser = await makeUser(user);
            expect(newUser.getEmail()).to.equal(user.email)
        })

        it('Returns hashed password', async () => {
            const newUser = await makeUser(user);
            expect(await newUser.getPassword).to.not.equal(user.password)
        })

        it('Makes a user ID for MongoDB', async () => {
            const newUser = await makeUser(user);
            expect(ObjectId.isValid(newUser.getId())).to.be.true
        })
    })
})