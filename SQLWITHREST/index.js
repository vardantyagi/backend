const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aashirvad@123',
})

const getRandomUser = ()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

app.get('/',(req,res)=>{
    try {
        let q = 'SELECT count(*) FROM user';
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let users = result[0]['count(*)'];
            res.render('index.ejs',{users});
        })
    } catch (err) {
        console.log(err);
        res.send('some error in db');
    }
})

app.get('/user',(req,res)=>{
    try {
        let q = 'SELECT * FROM user';
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let users = result;
            res.render('showusers.ejs',{users})
        })
    } catch (err) {
        console.log(err);
        res.send('some error in db');
    }
})

app.get('/user/new',(req,res)=>{
    res.render('new.ejs');
})

app.post('/user',(req,res)=>{
    const {username,email,password} = req.body;
    const id = uuidv4();
    let data =[[id,username,email,password]];
    try {
        let q = 'INSERT INTO user (id,username,email,password) VALUES ?';
        connection.query(q,[data],(err,result)=>{
            if(err) throw err;
            res.redirect('/user');
        })
    } catch (err) {
        console.log(err);
        res.send('some error in db');
    }
})

app.get('/user/:id/edit',(req,res)=>{
    const {id} = req.params;
    try {
        let q = `SELECT * FROM user WHERE id='${id}'`;
        connection.query(q,(err,result)=>{
            if(err) throw err;
            const user = result[0];
            res.render('edit.ejs',{user});
        })
    } catch (err) {
        console.log(err);
        res.send('some error occured in db');
    }
})

app.patch('/user/:id',(req,res)=>{
    const {id} = req.params;
    const {username:formUser,password:formPass} = req.body;
    try {
        let q = `SELECT * FROM user WHERE id='${id}'`;
        connection.query(q,(err,result)=>{
            if(err) throw err;
            const user = result[0];
            if(user.password!=formPass){
                res.send('wromg password');
            }
            else{
                try {
                    let q2 = `UPDATE user SET username = '${formUser}' WHERE id='${id}'`;
                    connection.query(q2,(err,result)=>{
                        if(err) throw err;
                        res.redirect('/user');
                    })
                } catch (err) {
                    console.log(err);
                    res.send('some error occured in db');
                }
            }
        })
    } catch (err) {
        console.log(err);
        res.send('some error occured in db');
    }
})

app.get('/user/:id/delete',(req,res)=>{
    const {id} = req.params;
    res.render('delete.ejs',{id});
})

app.delete('/user/:id',(req,res)=>{
    const {id} = req.params;
    const {email:formEmail,password:formPass} = req.body;
    try {
        let q = `SELECT * FROM user WHERE id='${id}'`;
        connection.query(q,(err,result)=>{
            if(err) throw err;
            const user = result[0];
            if(user.password!=formPass || user.email!=formEmail){
                res.render("wrong email or password");
            }
            else{
                try {
                    let q2 = `DELETE FROM user WHERE id='${id}'`;
                    connection.query(q2,(err,result)=>{
                        if(err) throw err;
                        res.redirect('/user');
                    })
                } catch (err) {
                    console.log(err);
                    res.send('some error occured in db');
                }
            }
        })
    } catch (err) {
        console.log(err);
        res.send('some error occured in db');
    }
})

app.listen(port,()=>{
    console.log('listening to port ',port);    
})

// try {
//     let q = 'SHOW DATABASES';
//     connection.query(q,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }


// let data = [];
// for(let i=0;i<50;i++){
//     data.push(getRandomUser());
// }
// console.log(data);

// try {
//     let q = 'INSERT INTO user (id,username,email,password) VALUES ?';
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }