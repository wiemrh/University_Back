const User = require("../models/User");

module.exports = {
    createUser: async (body) => {
        try {
            const newUser = new User(body);
            return await newUser.save();
        } catch (err) {
            throw err;
        }
    },
};
