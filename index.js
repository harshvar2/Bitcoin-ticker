//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  var cry = req.body.crypto;
  var fiat = req.body.fiat;
  var amount=req.body.amount;
  var options ={
    url: " https://blockchain.info/tobtc",
    method:"GET",
    qs: {
        currency:cry,
        value:amount
    }
  };
  request(options, function(error, response, body) {
    var data = body;
    // if (fiat == "USD")
    //   var price = data.USD.last;
    // else if (fiat == "GBP")
    //   var price = data.GBP.last;
    // else
    //   var price = data.EUR.last;
    //MULti line html use res.write
    console.log(data);
    // res.write("<p>Here is your result</p>");
    // res.write("<h1>Current price of </h1>" + cry + " is " + price + fiat);
    // res.send();
  })
})

app.listen(3000, function() {
  console.log("Server running on port 3000");
})
