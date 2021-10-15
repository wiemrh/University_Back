const teacherService = require("../../services/teacher");

module.exports = {
    createTeacher: async (req, res, next) => {
        try {
            const teacher = await teacherService.createTeacher(
                req.body
            );
            return res
                .status(201)
                .json({ teacher, message: "Teacher created!" });
        } catch (e) {
            return next(e);
        }
    }
};
