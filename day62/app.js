const express = require('express')
const http = require('http')
const path = require('path')
const app = express();
const {Server} = require('socket.io')
app.use(express.static(path.resolve('./public')))
const server = http.createServer(app)

const io = new Server(server)


app.get('/' , (req , res) => {
    res.sendFile('./public/index.html')
})

io.on('connection', (socket) => {
console.log('a new user is connected')
socket.on('user-message' , (message) => {
   
    socket.emit('message' ,message)
 
})
});
  


server.listen(5000 , () => {
    console.log(`server is listening on port 5000`)
})