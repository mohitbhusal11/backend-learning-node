import express from "express"
import ejs from "ejs"

const app = express();
const port = 3000;

const date = new Date();
const day = date.getDay();

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


app.get("/", (req, res) =>{
    if(day == 0 || day == 6){
        res.render('index.ejs', {
            day : days[day],
            message : "have fun"
        })
    }
    else{
        res.render('index.ejs', {
            day : days[day],
            message : "work hard"
        })
    }
})

app.listen(port, ()=>{
    console.log("server is running")
})