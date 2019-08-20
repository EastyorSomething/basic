var express = require('express');
var app = express();
var data = "nothing"
const PORT = process.env.PORT || 5000

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

app.listen().listen(PORT, () => console.log(`Listening on ${ PORT }`))
