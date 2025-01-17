import userService from '../services/userService.js';


const createUser = async (req, res) => {
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

        res.status(200).json({
            message: "Post from controller: api create new user"
        })
    } catch (error) {
        res.status(500).json({
            errors: error.message
        })
    }
}

export default {
    createUser,
}