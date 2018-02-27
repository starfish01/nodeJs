var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  //res.send(req.body.Drink);
  
  
  var jsonData = {"Name": req.body.Name, "Drink":req.body.Drink};
  console.log(jsonData);
  

  // fs.appendFile('../weekendchallenge/public/JSON/data.json', jsonData, function(err) {
  //   if (err){
  //     console.log(err.message);
  //   } else{
  //     console.log('complete');
  //   }

  fs.readFile('../weekendchallenge/public/JSON/data.json', "utf8", function read(err, data) {
    if(err){
      console.log(err);
    }else{
        console.log(data);
    var fileJson = JSON.parse(data);
      fileJson.push(jsonData);
      fs.writeFile('../weekendchallenge/public/JSON/data.json',JSON.stringify(fileJson));

    }


    
    //   console.log(data);
    // var fileJson = JSON.parse(data);
    //   fileJson.push(jsonData);
    //   fs.writeFile('../weekendchallenge/public/JSON/data.json',JSON.stringify(fileJson));
    
    }
);

res.json({"Name": req.body.Name, "Drink":req.body.Drink});

});



module.exports = router;
