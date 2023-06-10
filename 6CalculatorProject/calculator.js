const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    // res.send("Thanks for providing your data!");
    res.send(`<center><h1>Answer is: ${sum}.</h1></center>`);
})

app.listen(3000, function(){
    console.log("running server in PORT: 3000");
})