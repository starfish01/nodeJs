var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  //res.send(req.body.Drink);
  res.json({"Name": req.body.Name, "Drink":req.body.Drink});
});



module.exports = router;
