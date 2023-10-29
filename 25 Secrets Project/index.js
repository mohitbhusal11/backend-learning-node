// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
// 2. Create an express app and set the port number.
const app = express();
// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res)=>{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs",{user : result.data.username, secret : result.data.secret});
})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(3000, ()=>{
    console.log("connected at local host 3000");
})