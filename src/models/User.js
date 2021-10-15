const mongoose = require("mongoose");
const { Role, Gender} = require("../utils/enum");

const UserSchema = new mongoose.Schema(
    {
        firstName: String,

        lastName: String,

        birthDate: Date,

        email: {
            type: String,
            required: [true, "Please enter a valid email"],
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            unique: true,
            lowercase: true,
            index: true
        },

        phone: Number,

        role: {
            type: String,
            enum: Object.values(Role)
        },

        gender: {
            type: String,
            enum: Object.values(Gender)
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
