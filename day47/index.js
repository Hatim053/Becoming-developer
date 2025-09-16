const fs = require('fs');
// creating a file
fs.writeFileSync('./test.txt' , 'Hello I Am New File');
// fs.writeFile('./test2.txt' , 'i am also a new file' , (err) => {console.log(err)})

// reading a file
fs.readFile('./test.txt' , (err , result) => {
    if(err) console.log(err);
    else console.log(result);
});

// append
fs.appendFileSync('./test.txt' , 'Am Appended Text');


// copy 
fs.cpSync('./test.txt' , './copy.txt');

// delete
fs.unlinkSync('./copt.txt');

// creating a directory
fs.mkdirSync('./my-docs/newfolder' , {recursive:true});

