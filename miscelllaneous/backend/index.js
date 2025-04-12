const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(port);
})

app.get('/register',(req,res)=>{
    const {user , password} = req.query;
    res.send(`welcome ${user} to the website!`)
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    const {user} = req.body;
    res.send(`welcome ${user} to the website!`)
})