import Joi from 'joi'

const createUser = async (req, res, next) => {
    const correctCondition = Joi.object({
        userName: Joi.string().required().min(3).max(50).trim().strict(),
        email: Joi.string().min(3).max(50).email().required().trim().strict(),
    })
    try {

        await correctCondition.validateAsync(req.body, { abortEarly: false })
        next()

    } catch (error) {
        //422 error validate
        res.status(422).json({
            errors: new Error(error).message
        })
    }
}

export default {
    createUser,
}