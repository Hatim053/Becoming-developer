const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req , res) => {
  fs.appendFile('./log.txt' , `${Date.now()} , ${req.url}\n` , (err) => console.log(err));
  console.log(url.parse(req.url).query)

  res.end('Hello Habibi')

})

const port = 5000;

myServer.listen(port , () => {
    console.log(`server is running on port : ${port}`);
})




// url (unifrom resource locator)
// https:// - protcol
// www.google.com - domain (human readable name of the ip address);
// /user - path