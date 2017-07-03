/////////Express////

//import the http module
// var express = require("express");
// var path = require("path");
// var open = require("open");
// var webpack = require("webpack")
import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config";

const app = express();
const port = 8080;
const compiler = webpack(config);
// route our app
// app.get('/',function(req,res){
//   res.send("hello!");
// });
//app.use(express.static("dist"));
app.use(require("webpack-dev-middleware")(compiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}))


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

