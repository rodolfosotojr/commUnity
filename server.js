require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("./config/passport");
const routes = require("./routes");
const db = require("./models");
const Chatkit = require('@pusher/chatkit-server');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cookieParser());
app.use(bodyParser());

app.use(passport.initialize());
app.use(routes)
require("./routes/API/apiRoutes")(app);

var syncOptions = { force: false }; // set to true to drop and create tables everytime server starts


require("./routes/API/chatRoutes")(app);




db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});