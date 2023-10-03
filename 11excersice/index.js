import express from "express";
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>landing page</h1>")
});

app.get("/about", (req, res) =>{
    res.send("about page")
})

app.get("/contact", (req, res) =>{
    res.send("contact page")
})

app.listen(3000, ()=>{
    console.log("server is running");
})