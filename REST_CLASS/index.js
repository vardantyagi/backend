const express = require('express')
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({extended:true})); // parse the incomming data so that express can read it

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log("listening to port ",port);
})

let posts = [
    {
        username: "vardantyagi",
        content: "I love coding",
    },
    {
        username: "hello",
        content: "work hard",
    },
    {
        username: "pablo",
        content: "money",
    },
]

app.get('/posts',(req,res)=>{
    // res.send("server working well")
    res.render('index.ejs',{posts})
}) 