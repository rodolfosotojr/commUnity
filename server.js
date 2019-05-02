require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const routes = require("./routes");
const cors = require('cors')

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



app.use(session({ secret: 'keyboard cat',  saveUninitialized: true,
resave: true }));
app.use(passport.initialize());
app.use(passport.session());
// Define API routes here
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(routes)

// Send every other request to the React app
// Define any API routes before this runs


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
