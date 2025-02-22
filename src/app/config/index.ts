// Importing the necessary modules
import dotenv from 'dotenv';  // Module to load environment variables from a .env file
import path from 'path';  // Module to work with file and directory paths

// Load environment variables from a .env file located in the root directory
dotenv.config({ path: path.join(process.cwd(), '.env') });

// Exporting the configuration settings
export default {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
}
