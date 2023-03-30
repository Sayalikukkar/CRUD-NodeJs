const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/emp')
var app = express()

//Route
app.get('/', function(req,res){
    res.send("hello world")
})
app.use('/emp',router)

//MongoDb connection
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

//server
app.listen(8000, function(){
    console.log('server is up')
})