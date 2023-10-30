// https://api.genderize.io?name=peter
// this is open api which doesn't require api key or auth

import express from "express"
import axios from "axios"
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/info", async (req,res)=>{
    try{const userName = req.body.name;
    console.log(userName);
    const result = await axios.get("https://api.genderize.io?name="+userName);
    console.log(result.data);
    res.render("info.ejs",{name:result.data.name,gender:result.data.gender,prob:result.data.probability});
    }catch(error){
        console.log(error.message)
        res.render("info.ejs",{name:"error",gender:"error",prob:"?"})
    }
})
app.listen(PORT,()=>{
    console.log("server running in ", PORT);
})