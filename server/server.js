const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 9080;

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE");
	next();
});


app.get('/api/message', (req, res) => {
	res.send('Hello from server');
});

app.listen(port);