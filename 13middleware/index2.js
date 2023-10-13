import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

//morgan middle ware
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
