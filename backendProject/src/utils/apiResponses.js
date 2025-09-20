class apiResponses {
    constructor(
        statusCode , data , message  = 'something went wrong', success
    ) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = success;
    }
}


export default apiResponses;