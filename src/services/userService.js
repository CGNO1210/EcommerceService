//imp db

import ApiError from "../utils/ApiError.js"

const createUser = async (userName, password) => {
    try {
        throw new ApiError(501, 'Not implemented');
    } catch (error) {
        throw error
    }
}

export default {
    createUser,
}