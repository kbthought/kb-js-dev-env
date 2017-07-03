/////////Express////

//import the http module
var express = require("express");
var path = require("path");
var open = require("open");

var app = express();
var port = 8080;

// route our app
// app.get('/',function(req,res){
//   res.send("hello!");
// });
app.use(express.static("dist"));

app.get('/',function(req,res){
     res.sendFile(path.join(__dirname,'../index2.html'));
    //res.sendFile(path.join(__dirname,'index2.html'));
})

// start server and listen on port x
// app.listen(port, function(){
//   console.log('app started');
// });
app.listen(port,function(err){
  if(err){
    console.log(err);
  }else {
    open('http://localhost:' + port);
  }
})

