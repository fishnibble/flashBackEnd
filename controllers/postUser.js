module.exports = makePostUser = (registerUser) => {
    return postUser = async (httpRequest) => {
        try {
            
            const userInfo = httpRequest.body
            const postedUser = await registerUser(userInfo);
            
            return {
                heders: { 
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: postedUser 
            }
        } catch(e) {
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: e
            }
        }
    }
}