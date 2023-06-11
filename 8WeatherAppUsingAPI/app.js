const express = require("express");
const { futimesSync } = require("fs");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
  console.log(req.body.cityName);
  const city = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c399deb47ed9ecb5c93928f743938ca7`;
  
  https.get(url, function (response) {
    console.log(response.statusCode);
    console.log(response.statusMessage);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const cityname = city;
      const temp = weatherData.main.temp;
      const weather = weatherData.weather[0].main;
      const description = weatherData.weather[0].description;
      // console.log(weatherData);

      res.send(
        `<h1>City name: ${cityname} </h1> <h2>temperature: ${temp}</h2> <h3>Weather: ${weather}</h3><h3>Description: ${description}</h3>`
      );
    });
  });
});



app.listen(3000, function () {
  console.log("Server is running in PORT: 3000");
});
