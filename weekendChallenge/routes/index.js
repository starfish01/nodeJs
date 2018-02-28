var express = require('express');
var router = express.Router();

var fs = require('fs');

var fileJson =null;

/* GET home page. */
router.get('/', function(req, res, next) {
  grabJsonDataFile();

  res.render('index', { title: 'Express', subtitle: 'george' });
});

function grabJsonDataFile(){
  fs.readFile('../weekendchallenge/public/JSON/data.json', "utf8", function read(err, data) {
    if(err){
      console.log(err);
    }else{
        //console.log(data);
     fileJson = JSON.parse(data);
    }
})};

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

  // fs.readFile('../weekendchallenge/public/JSON/data.json', "utf8", function read(err, data) {
  //   if(err){
  //     console.log(err);
  //   }else{
  //       //console.log(data);

  grabJsonDataFile();
  
  console.log(fileJson);

  //fileJson = JSON.parse(data);
  fileJson.push(jsonData);

  console.log(fileJson);

  fs.writeFile('../weekendchallenge/public/JSON/data.json',JSON.stringify(fileJson));

    
  res.json({"Name": req.body.Name, "Drink":req.body.Drink});


    
    //   console.log(data);
    // var fileJson = JSON.parse(data);
    //   fileJson.push(jsonData);
    //   fs.writeFile('../weekendchallenge/public/JSON/data.json',JSON.stringify(fileJson));
    //}
    
});






module.exports = router;
