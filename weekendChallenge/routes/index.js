var express = require('express');
var router = express.Router();

var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {


  fs.readFile('../weekendchallenge/public/JSON/data.json', "utf8", function read(err, data) {
    if(err){
      console.log(err);
    }else{
        //console.log(data);
    var fileJson = JSON.parse(data);
    }
})

  res.render('index', { title: 'Express', subtitle: 'george' });
});



router.post('/', function(req,res){
  //res.send();
  var jsonData = {"Name": req.body.Name, "Drink":req.body.Drink};
  fs.readFile('../weekendchallenge/public/JSON/data.json', "utf8", function read(err, data) {
    if(err){

    }else{
      var fileJson = JSON.parse(data);
      fileJson.push(jsonData);
      fs.writeFile('../weekendchallenge/public/JSON/data.json',JSON.stringify(fileJson), 'utf8', function(err){
        if (err) {
         console.log(err);
      }else{
        var k = "helloworld";
        res.render('index',{word: 'k'});
      }

      });
    }
  })

  
});






module.exports = router;
