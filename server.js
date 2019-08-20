var express = require('express');
var app = express();
var data = "nothing"

 app.get('/', function(req, res){
  //res.sendFile(__d(irname+"/index.html");
    //res.send(
		//"<html> <head> <title>Snap Cloud Variables</title> </head> <body>"+query+"</body> </head>"
	//)
	res.send(data);
	if (req.query.sending = true) {
		data = req.query.setto
	}
});

app.listen(3000, function(){
	console.log("Server is running on 3000");	
});
