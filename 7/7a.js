request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=01eddd3e3f5bd04f222de5dff404880a&query=New%20York&units=f";
request({ url: url }, (err, response) => {
  const data = JSON.parse(response.body);
  console.log("The current temperature is ", data.current.temperature);
  console.log("Country is", data.location.country);
});
