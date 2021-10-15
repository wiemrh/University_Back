const Teacher = require("../models/Teacher");
const {Role} = require("../utils/enum");
const userServices = require("./user");

module.exports = {
    createTeacher: async (body) => {
        try {
            const user = await userServices.createUser({
                ...body.user,
                role: Role.teacher
            });

            const newTeacher = new Teacher({
                ...body,
                _id: user._id,
                user: user._id
            });

            return await newTeacher.save();
        } catch (err) {
            throw err;
        }
    },
};
