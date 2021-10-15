const Student = require("../models/Student");
const {Role} = require("../utils/enum");
const userServices = require("./user");

module.exports = {
    createStudent: async (body) => {
        try {
            const user = await userServices.createUser({
                ...body.user,
                role: Role.student
            });

            const newStudent = new Student({
                ...body,
                _id: user._id,
                user: user._id
            });

            return await newStudent.save();
        } catch (err) {
            throw err;
        }
    },
};
