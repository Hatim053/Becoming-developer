const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/user/info' , (req , res) => {
    const obj = {
        name : 'Hatim',
        age : 22,
    }
    res.send(obj);
})

app.listen(port , () => {
    console.log(`server is running on port : ${port}`);
})