const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("Couldn't find .env file !");
}

module.exports = {
    /**
     * database URL
     */
    mongoUrl: process.env.DB_CONNECTION,
    port: parseInt(process.env.PORT, 10),
    /**
     * API configs
     */
    api: {
        prefix: "/api"
    },

};
