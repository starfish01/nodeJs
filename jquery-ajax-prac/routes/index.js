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

router.post('/users',function(req,res){
  alert(1);
});

module.exports = router;
