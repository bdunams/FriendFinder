// API ROUTES

const friendsData = require('../data/friends.js')
const bodyParser = require("body-parser");
const path = require("path");

// Function to calculate servey match
calculateMatch = (userSurvey) => {
  
  let userScores = userSurvey.scores;
  console.log(userScores)
    
  let matchScores = []; 

  // Loop through previous surveys for a match
  friendsData.forEach((friend, index) => {

    let rating = 0;
    let combinedScores = [];

    for(var i = 0; i < friend.scores.length; i++){
      // Calculate the result to each question
      rating = Math.abs(userScores[i] - friend.scores[i]);
      combinedScores.push(rating)

    }
    // Add up the total of each possible friends comparison
    let combinedTotal = combinedScores.reduce((sum, value) => sum + value)
    matchScores.push(combinedTotal);

  })

  // Find the index of the survey with the least amount of difference
  let closestMatch = matchScores.indexOf(Math.min(...matchScores));

  // Return friend data of the closest match in json
  return friendsData[closestMatch];
}

module.exports = app => {
  
  // Send API data
  app.get('/api/friends', (req, res) => {
    return res.json(friendsData);
  })
  
  // Route to calculate and send Survey Results
  app.post("/api/friends", (req, res) => {
    let newSurvey = req.body;
    
    res.json(calculateMatch(newSurvey));
  });
}