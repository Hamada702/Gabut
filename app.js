const express = require("express"); // express js
const bodyParser = require("body-parser"); // middleware buat baca body dari file html
const path = require("path"); // path file path directory
const port = 3002; // port express js

const app = express();

app.use(bodyParser.urlencoded()); // body parser sebagai urlencoded
app.post("/login", (req, res) => {
  if(req.body.username == "admin" && req.body.password == "12345") {
    res.send("Welcome " + req.body.username + " you message is " + req.body.password); // baca hasil imput dari html message & username
  } else {
    res.send("Wrong username or password");
  }
});

app.get("/", (req, res) => {
  res.sendFile("login.html", { root: path.join(__dirname, "public") }); // ambil file dari directory dengan path
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
