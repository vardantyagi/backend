// const path = require("path");
const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public/css'));
app.use(express.static('public/js'));

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));
// app.use("views",path.join(__dirname,"public"));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("root page");
})
app.get('/home',(req,res)=>{
    res.render('home.ejs');
})

app.get('/rolldice',(req,res)=>{
    const diceVal = Math.floor(Math.random()*6) + 1;
    res.render('rolldice.ejs',{ diceVal })
})

app.get('/ig/:username',(req,res)=>{
    let {username} = req.params;
    console.log(username);
    // const followers = ['adam','bob','steve','abc'];
    // res.render('instagram.ejs',{username , followers});
    // import instagramData from './'
    const instagramData = require('./data.json');
    console.log(instagramData);
    const data = instagramData[username]
    if(data){
        res.render('instagram.ejs',{ data })
    }else{
        res.render('error.ejs');
    }
})