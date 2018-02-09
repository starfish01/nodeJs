var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');


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

//golbal vars
app.use(function(req, res, next){
	res.locals.errors =null;
	next();
});

// Express validator middleware
app.use(expressValidator({
	errorFormatter: function(param, msg, value){
		var namespace = param.split('.'),
		root = namespace.shift(),
		formParam = root;

		while(namespace.length){
			formParam += '[' + namespace.shift() + ']';
		}
		return{
			param : formParam,
			msg : msg,
			value : value
		};
	}
}));



var users= [
	{
	id: 1,
	first_name:'john',
	last_name:'Doe',
	email: 'johndoe@gmail.com'
	},
	{
	id: 2,
	first_name:'Sarah',
	last_name:'Smith',
	email: 'sarahsmith@gmail.com'
	},
	{
	id: 3,
	first_name:'Bob',
	last_name:'Builder',
	email: 'BobBuilder@gmail.com'
	}
]

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
		title:'customers',
		users: users
	});
});


app.post('/users/add', function(req,res){
	
	req.checkBody('first_name', 'First Name is Required').notEmpty();
	req.checkBody('last_name', 'Last Name is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();



	var errors = req.validationErrors();

	if(errors){
		res.render('index',{
			title:'customers',
			users: users,
			errors: errors
	});
	}else{
		var newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}
	console.log('Object Created...');


	}

	



});





app.listen(3000, function(){
	console.log('Server started on port 3000...')
});