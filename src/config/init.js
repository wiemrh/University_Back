const mongoose = require("mongoose");
const { mongoUrl } = require("./index");

module.exports = {
    initializeDB: async () => {
        mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.Promise = global.Promise;
    }
};
