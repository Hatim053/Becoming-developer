class apiErrors extends Error {
    constructor(
        statusCode , error ,  message='' , stack='' , success = 'false') {
        super(message);
        this.statusCode = statusCode;
        this.stack = stack;
        this.success = success;
        this.error = error;
    }
}

export default apiErrors;