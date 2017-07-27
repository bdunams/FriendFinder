// API ROUTES

const appData = require('../data/friends')
const bodyParser = require("body-parser");
const path = require("path");
const express = require('express');

module.exports = app => {
  
  // Retrieve page assets like CSS
  app.use('/assets', express.static(path.join(__dirname, "../public/")));
  

  // Route to servey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // Default Route to home page
  app.use(function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}