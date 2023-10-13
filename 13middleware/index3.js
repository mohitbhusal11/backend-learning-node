import express from "express";

const app = express();
const port = 3000;

//custom middleware function to use middleware we have to use "use" function like app.use(here_function_name)
//i have to create this custon middleware
//note: middleware function contain req, res, next and in end of the function we have to call "next()" to get out from the middleware function

function logger(req, res, next){
  console.log("Request method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
