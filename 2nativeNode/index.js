const fs = require("fs");

//this is for write file

fs.writeFile("writefile.txt", "Hello, I'm Node", (err)=>{
    if(err) throw err;
    console.log("The file has been saved");
});

//this is for read file

fs.readFile("./readfile.txt", "utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data);
    console.log("the file is readed");
})