const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello from Express, I'm Mohit");
})

app.get("/contact", function(req, res){
    res.send(`<h1>Contack me at: mohitbhusal11@gmail.com </h1>`);
})

app.get("/about", function(req, res){
    res.send("This is the about page");
})

app.listen(3000, function(){
    console.log(`server is running in PORT: 3000`)
});