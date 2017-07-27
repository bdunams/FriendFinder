// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


apiRoutes(app);
htmlRoutes(app);




// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
