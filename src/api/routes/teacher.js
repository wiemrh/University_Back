const express = require("express");
const router = express.Router();
const { celebrate } = require("celebrate");
const Joi = require("@hapi/joi");
const { TeacherSubject} = require("../../utils/enum");

// IMPORT CONTROLLER
const {
    createTeacher
} = require("../controllers/teacher");
const {validateUser} = require("../middlewares/celebrate");

router
    .post(
        "/",
        celebrate({
            body: Joi.object({
                user: validateUser,
                subject: Joi.string()
                    .valid(...Object.values(TeacherSubject))
            }).required()
        }),
        createTeacher
    )

module.exports = router; // exporting router
