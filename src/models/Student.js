const mongoose = require("mongoose");
const { StudentSubject} = require("../utils/enum");

const StudentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        subject: {
            type: String,
            enum: Object.values(StudentSubject)
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
