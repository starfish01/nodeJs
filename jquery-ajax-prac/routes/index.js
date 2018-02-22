var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Jquery _ AjAXS',
    heading:'coffee shop',
    subheading: 'ahh coffee'
  });
});

router.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');
  console.log('hello world');
  //mimic a slow network connection
	setTimeout(function(){

		res.send(JSON.stringify({
			name: req.body.personsName || null,
			drink: req.body.PersonsDrink || null
		}));

  }, 1000)
  
  

	//debugging output for the terminal
	console.log('you posted: First Name: ' + req.body.personsName + ', Last Name: ' + req.body.personsDrink);
});

module.exports = router;
