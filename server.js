//Initialization
var express = require('express');
var app=express();
app.use(express.static('public'));



var bodyParser = require('body-parser');
var urlencodeparser = bodyParser.urlencoded({
extended:false
});




//Routes
app.get('/',function(req,res)
{
	res.send('My First Node server');

});

app.post('/save_user',urlencodeparser,function(req,res)
{
	var response={
		email:req.body.email,
		name:req.body.name,
		grade:req.body.grade
	}
	res.end(JSON.stringify(response));

	Info.create({
		email:req.body.email,
		name:req.body.name,
		grade:req.body.grade
	},function(err,todo){
		if(err)
			res.send(err);
	});
});


app.get('/all_info',urlencodeparser,function(req,res)
{
  Info.find(function(err,infos)
  {
  	if(err) res.send(err);
     res.json(infos);
  });
});

var server =app.listen(3000,function()
{
	var port=server.address().port
	console.log('Example app listening on port 3000! go to http://localhost:%s',port);
})


var database=require('./config/database'); //load the configuration

var mongoose =require('mongoose');
mongoose.connect(database.dbConn);

var Info = require('./models/info');
