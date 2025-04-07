import express from 'express'

const app = express() // object
// console.dir(app)

let port = 3000; // 5173
app.listen(port,()=>{
    console.log('app is listenint on port ',port);
    console.dir('app is listenint on port ',port);
})

app.use((req,res)=>{
    // console.log(req);
    // console.log(res);
    res.send("<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li></ul>")
    console.log('request received');  
})
