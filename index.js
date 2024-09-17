const express = require('express');
const connection = require('./connection');
const router = require('./routes/student')
const app = express();
connection();
app.use(express.json())
app.use(router);
app.listen(3001, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
})

//http://localhost:3000/add/user