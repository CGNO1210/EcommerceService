import userService from '../services/userService.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes'


const createUser = async (req, res, next) => {
    // return res.send("hello ecommerce app")
    // let message = await userService.createUser("name", "pass");
    // res.status(200).json(message)
    try {
        console.log(req.body);
        console.log(req.query);
        console.log(req.params);
        console.log(req.file);
        console.log(req.cookies);
        console.log(req.jwtDecoded);

        const message = await userService.createUser() 
        // throw new ApiError(StatusCodes.BAD_GATEWAY,"test error")
        res.status(200).json({
            message: "Post from controller: api create new user"
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createUser,
}