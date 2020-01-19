const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rutvik:johnhinkle@react-movie-zmxb5.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>console.log('DB Connected'))
.catch(err => console.error(err));

app.get('/',(req,res)=>{
    // res.send("Hey Folks")
    res.send("Author : Rutvik")
});

 

app.listen(5001);
