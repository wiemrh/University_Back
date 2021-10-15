const studentService = require("../../services/student");

module.exports = {
    createStudent: async (req, res, next) => {
        try {
            const student = await studentService.createStudent(
                req.body
            );
            return res
                .status(201)
                .json({ student, message: "Student created!" });
        } catch (e) {
            return next(e);
        }
    }
};
