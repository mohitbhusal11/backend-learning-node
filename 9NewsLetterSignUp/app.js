const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { futimesSync } = require("fs");

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
    
    const data = {
        members: [
            {
                email_address: emailId,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    
    const url = "https://us21.api.mailchimp.com/3.0/lists/e929d6354f"
    const option = {
        method: "POST",
        auth: "Mohitbhusal:cbe99a84f245e64331570a75c5bd2b4d-us21"
    }
    const request = https.request(url, option, function(response){
        if(response.statusCode >=200 && response.statusCode <=299){
            res.sendFile(__dirname +"/success.html");
        }
        else{
            res.sendFile(__dirname +"/failure.html")
        }
        response.on("data", function(data){
            // console.log(JSON.parse(data));
        })
    })
    
    request.write(jsonData);
    request.end();
    
})

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
})

//------------------------------------------------comments----------------------------------------------

//use your api for your test and look up
//website is mainchimp.com

//api key
//cbe99a84f245e64331570a75c5bd2b4d-us21

//audience id
//e929d6354f