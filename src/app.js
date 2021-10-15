const express = require("express");
const bodyParser = require("body-parser");
const {port, api} = require("./config");
const {initializeDB} = require("./config/init");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.all("/", (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.options("*", cors()); // include before other routes

const teacherRoute = require("./api/routes/teacher");
const studentRoute = require("./api/routes/student");

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);

    // connect to mongodb
    initializeDB().then(() => console.log("Connected to MongoDB service"));
});


app.use(`${api.prefix}/teacher`, teacherRoute);
app.use(`${api.prefix}/student`, studentRoute);

app.use((req, res, next) => {
    const error = new Error(" API Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        error: error.message
    });
    next();
});

module.exports = app;
