var express = require('express');
var path = require('path');

var app = express();


//configure

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware

//define routes

app.get('/', function(req, res){
  res.render('index',{
  	title: 'My wow app',
  	items: [
  		{id: 1, name:'item 1'},
  		{id: 2, name:'item 2'},
  		{id: 3, name:'item 3'},
		{id: 4, name:'item 4'}
  	]
  });
});


app.listen(8080, function(){
	console.log('dirname:', __dirname);
	console.log("ready on port 8080");
});


