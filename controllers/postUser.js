module.exports = makePostUser = (registerUser) => {
    return postUser = async (httpRequest) => {
        try {
            
            const userInfo = JSON.stringify(httpRequest.body)
            
            const postedUser = await registerUser(JSON.parse(userInfo));
            console.log(postedUser);
            
            return {
                heders: { 
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: postedUser 
            }
        } catch(e) {
            console.log(e);
        }
    }
}