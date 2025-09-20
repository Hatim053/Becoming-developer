class apiErrors extends Error {
    constructor(
        statusCode , message , stack='' , success = 'false' , error) {
        super(message);
        this.statusCode = statusCode;
        this.stack = stack;
        this.success = success;
        this.error = error;
    }
}

export default apiErrors;