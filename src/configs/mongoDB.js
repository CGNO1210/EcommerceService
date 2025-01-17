


import { MongoClient, ServerApiVersion } from "mongodb"
import { env } from './environment.js'

let databaseInstance = null

//khỏi tạo mongoClientInstance để connect tới db
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const CONNECT_DB = async () => {
    await mongoClientInstance.connect()

    databaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}
export const CLOSE_DB = async () => {
    await mongoClientInstance.close()
}

export const GET_DB = () => {
    if (!databaseInstance) throw new Error("Must conncet to database first!")
    return databaseInstance
}