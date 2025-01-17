import "dotenv/config"

export const env = {
    PORT: process.env.PORT,
    AUTHOR: process.env.AUTHOR,
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
}