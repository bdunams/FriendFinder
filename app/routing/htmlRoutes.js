// API ROUTES

const appData = require('../data/friends')
const bodyParser = require("body-parser");
const path = require("path");

module.exports = app => {
  
  //app.use('/assets', express.static(__dirname + "../public/home.html"))
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}