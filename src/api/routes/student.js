const express = require("express");
const router = express.Router();
const { celebrate } = require("celebrate");
const Joi = require("@hapi/joi");
const { StudentSubject} = require("../../utils/enum");
Joi.objectId = require("joi-objectid")(Joi);

// IMPORT CONTROLLER
const {
    createStudent
} = require("../controllers/student");
const {validateUser} = require("../middlewares/celebrate");

router
    .post(
        "/",
        celebrate({
            body: Joi.object({
                user: validateUser,
                subject: Joi.string()
                    .valid(...Object.values(StudentSubject))
            }).required()
        }),
        createStudent
    )

module.exports = router; // exporting router
