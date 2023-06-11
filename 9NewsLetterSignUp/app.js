const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req, res){
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const emailId = req.body.emailId;
    console.log("First Name:" + firstName +"Second Name: " + secondName + "Email: " + emailId);
})

app.listen(3000, function(){
    console.log("server is running on port 3000");
})