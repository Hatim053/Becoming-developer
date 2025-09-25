const userStateId = new Map()


const getUser = function(sessionId) {
const user = userStateId.get(sessionId)
return user
}

const setUser = function(sessionId , user) {
userStateId.set(sessionId , user)
}


export {
    getUser,
    setUser
}