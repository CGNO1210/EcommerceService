import express from 'express'
import initWebRoutes from './routes/webRoutes.js';
import cors from 'cors';
import { CONNECT_DB, GET_DB, CLOSE_DB } from './configs/mongoDB.js';
import exitHook from 'async-exit-hook';
import { env } from './configs/environment.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'

const START_SERVER = () => {
    const app = express()
    app.use(express.json())

    app.use(cors({ origin: true }))
    const port = env.PORT

    initWebRoutes(app)

    app.use(errorHandlingMiddleware)


    app.listen(port, () => {
        console.log(`Hi, ${env.AUTHOR} Example app listening on port ${env.PORT}`)
    })
    exitHook(() => {
        CLOSE_DB()
        console.log("Disconnected from MongoDB Cloud Atlas!");
    })
}

CONNECT_DB()
    .then(() => console.log("Connected to MongoDB Cloud Atlas!"))
    .then(() => START_SERVER())
    .catch(error => {
        console.error(error)
        process.exit(0)
    })