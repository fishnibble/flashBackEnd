module.exports = makePostLogin = (userLogin) => {
    return postLogin = async (http) => {
        try {
            const username = http.body.username;
            const password = http.body.password;

            const loggedInUser = await userLogin(username, password);

            return {
                heders: { 
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: loggedInUser
            }
        } catch(e) {
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 401,
                body: console.log(e)
                
            }
        }

    }
}