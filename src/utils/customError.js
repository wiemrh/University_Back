const error = (message, status) => {
    const err = new Error(message);
    err.status = status;
    return err;
};
module.exports = error;
