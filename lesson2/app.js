var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var logger = function(req, res, next){
	console.log('logging...');
	next();
}

/*app.use(logger);

app.get('/',function(req, res){
	res.send('hello world');
});*/

// view engine
app.set('view engine', 'ejs');
app.set('views',(__dirname,'views'));



//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
//app.use(express.static(path.join(__dirname,'public')));

/*var person = [{
	name:'jef',
	age: 30
},{
	name:'sarah',
	age: 33
},{
	name:'sue',
	age: 34
}
]*/

app.get('/', function(req,res){
	//res.send('hello');
	//res.json(person);

	res.render('index',{
		title:'customers'
	});
});

app.listen(3000, function(){
	console.log('Server started on port 3000...')
});