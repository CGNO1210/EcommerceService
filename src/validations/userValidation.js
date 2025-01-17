import Joi from 'joi'
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes'

const createUser = async (req, res, next) => {
    const correctCondition = Joi.object({
        userName: Joi.string().required().min(3).max(50).trim().strict(),
        email: Joi.string().min(3).max(50).email().required().trim().strict(),
    })
    try {

        await correctCondition.validateAsync(req.body, { abortEarly: false })
        next()

    } catch (error) {
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
    }
}

export default {
    createUser,
}