import express from 'express';
import userController from '../controllers/userController.js';
import userValidation from '../validations/userValidation.js';


let routes = express.Router()

const initWebRoutes = (app) => {
    // routes.get('/', userController.createUser)
    routes.post('/', userValidation.createUser,userController.createUser)

    return app.use('/api', routes)
}
export default initWebRoutes