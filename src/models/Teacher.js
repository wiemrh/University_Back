const mongoose = require("mongoose");
const { TeacherSubject} = require("../utils/enum");

const TeacherSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        subject: {
            type: String,
            enum: Object.values(TeacherSubject)
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
