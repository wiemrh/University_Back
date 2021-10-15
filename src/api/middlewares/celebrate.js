const Joi = require("@hapi/joi");
const {Role} = require("../../utils/enum");

exports.validateUser = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthDate: Joi.date().required(),
    gender: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    role: Joi.string()
        .valid(...Object.values(Role))
}).required()
