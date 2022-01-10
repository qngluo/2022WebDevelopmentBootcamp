
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true})); //urlencoded for form data

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");//__dirname is current directory
})

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculator is " + result);
})


app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");//__dirname is current directory
})

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
})

app.listen(port, function(){
  console.log("server is running on port 3000.");
})
