import express from 'express'
let users = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));
import fs from 'fs'
import { urlencoded , json } from 'express'
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = 5000

app.get('/users' , (req , res) => {
    res.json(users);
})


app.route('/users/user/:id')
.get((req , res) => {
  let searchedUser =   users.find((user) => user.id == req.params.id);
  res.setHeader('x-owner' , 'Hatim');
  res.json(searchedUser);
})


.delete((req , res) => {
    users.map((user , idx) => {
     if(user.id == req.params.id) users.splice(idx , 1);
    })
    fs.writeFile('./user.json' , JSON.stringify(users , null , 2) , (err) => console.log(err))
    res.json(users);
})
.patch((req , res) => {
    const data = req.body;
    const id = req.params.id;
    users.map((user) => {
        if(user.id == id) {
            console.log(user)
            user.name = data.name;
            user.email = data.email;
        }
    })
    fs.writeFile('./user.json' , JSON.stringify(users , null , 2) , (err) => console.log(err))
})
.put((req,res) => {
        const data = req.body;
    const id = req.params.id;
    users.map((user) => {
        if(user.id == id) {
          user = { "id" : id , ...data};
        }
    })
    fs.writeFile('./user.json' , JSON.stringify(users , null , 2) , (err) => console.log(err))
})

app.post('/users/user' , (req,res) => {
    const data = req.body;
    users.push({id : users.length+1 , ...data});
    fs.writeFile('./user.json' , JSON.stringify(users) , (err) => console.log(err))
    res.json(users);
    console.log(data)

})

 

app.listen(port , (req , res) => console.log(`server is running on port : ${port}`))