const express = require('express');

const app = express();


const port = 3000;

app.get('/' , (req , res) => {
    res.send('welcome to express js');
})

app.get('/login' , (req,res) => {
    res.send('hello user');
})
app.listen(port , () => {
    console.log(`server is running on port : ${port}`);
})