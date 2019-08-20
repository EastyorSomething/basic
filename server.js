var express = require('express');
var app = express();
var data = "nothing"
const net = require('net');
const path = require('path');

 app.get('/', function(req, res){
  //res.sendFile(__dirname+"/index.html");
    //res.send(
		//"<html> <head> <title>Snap Cloud Variables</title> </head> <body>"+query+"</body> </head>"
	//)
	res.send(data);
	if (req.query.sending = true) {
		data = req.query.setto
	}
});

net.createServer().listen( path.join('\\\\?\\pipe', process.cwd(), 'myctl')), function(){
	console.log("Server is running");
};