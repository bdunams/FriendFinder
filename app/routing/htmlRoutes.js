// API ROUTES

const appData = require('../data/friends')
const bodyParser = require("body-parser");
const path = require("path");
const express = require('express');

module.exports = app => {
  
  //app.use('/', express.static(path.join(__dirname, "../public/home.html")));
  
  // Route to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Route to servey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}