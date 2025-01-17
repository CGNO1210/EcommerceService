//imp db

const createUser = (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve({
                errCode: 0,
                message: 'User created successfully',
            })
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    createUser,
}