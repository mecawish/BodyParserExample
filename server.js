const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const hostname = 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/www'));

app.post('/form', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	
	setTimeout(function(){
		res.send(JSON.stringify({
			firstName: req.body.firstName || null,
			lastName: req.body.lastName || null
		}));
	}, 1000);
});

app.listen(port, hostname, function(){
	console.log(`Server at http://${hostname}:${port}/`);
});