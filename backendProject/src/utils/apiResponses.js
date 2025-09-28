class apiResponses {
    constructor(
        statusCode , data , message  = '', success = ''
    ) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = success;
    }
}


export default apiResponses;