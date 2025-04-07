import express from 'express'

const app = express() // object
// console.dir(app)

let port = 3000; // 5173
app.listen(port,()=>{
    console.log('app is listenint on port ',port);
    console.dir('app is listenint on port ',port);
})

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     res.send("<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li></ul>")
//     console.log('request received');  
// })

// app.get('/',(req,res)=>{
//     res.send("hello i am root");
// })

// app.get('/search',(req,res)=>{
//     res.send("you contacted search path");
// })
 
app.get('/help',(req,res)=>{
    res.send("you contacted help path");
})

app.post('/',(req,res)=>{
    res.send("you have sent a post request");
})

app.get('/search/:username/:id',(req,res)=>{
    let {username,id} = req.params
    console.log(req.params);
    const htmlRes = `<h1>welcome to the page of @${username} with id #${id}</h1>`
    res.send(htmlRes);
})

// app.get('*',(req,res)=>{
//     res.send("this path is not found");
// })

app.get('/search',(req,res)=>{
    const {q,color} = req.query
    if(!q){
        res.send('nothing searhed q');
    }
    if(!color){
        res.send('nothing searhed color');
    }
    res.send(`<h1>search results for query: ${q} ${color}</h1>`)
})