import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
.prompt([
    {
        message: "type in your URL",
        name: "URL",
    }
])
.then((answer) =>{
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    const filename  = `./png_filename.txt`;
    fs.writeFile(filename,url, (err) =>{
        if(err) throw err;
        console.log(`The user input URL is saved in ${filename}`);
    })
})
.catch((error) =>{
    if(error.isTtyError){
        //prompt couldn't be renderedin the current evvironment
    }
    else{
        //something else went wrong
    }
})