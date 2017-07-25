// API ROUTES

const appData = require('../data/friends.js')
const bodyParser = require("body-parser");
const path = require("path");

module.exports = app => {
  
  app.get('/api/friends', (req, res) =>{
    return res.json(appData);
  })
  
  // Create New Reservations - takes in JSON input
  app.post("/api/friends", function(req, res) {
    var newSurvey = req.body;

    console.log(newSurvey);

    // Add survey to data
    appData.push(newSurvey);

    // DO SOME LOGIC COMPARISONS

  });
}