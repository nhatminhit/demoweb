class ErrorRespone extends Error {
    constructor(statusCode, message) {
        supper(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorRespone;