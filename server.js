require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const routes = require("./routes");

const db = require("./models");

require("./config/passport")(passport);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cookieParser());
app.use(bodyParser());

// This will drop and create the db if set to true
var syncOptions = { force: false };

app.use(session({ secret: 'keyboard cat',  saveUninitialized: true,
resave: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(routes)

// Send every other request to the React app
// Define any API routes before this runs

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});