
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path: path.join(process.cwd(), '.env'),
})


const config = {
    port: process.env.PORT as string,
    mongodb_uri: process.env.MONGODB_URI as string,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string
}

export default config