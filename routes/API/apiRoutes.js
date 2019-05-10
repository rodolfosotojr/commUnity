var db = require("../../models");
var passport = require("../../config/passport");
const path = require("path");
const multer = require("multer");


module.exports = function (app) {
  // LOGOUT ROUTE
  // Logout using .logout() method then redirect to login page.
  app.get("/api/logout", function (req, res) {
    req.logOut();

    res.redirect("/");
  });

  // SET STORAGE
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  var upload = multer({ storage: storage })

  //Handle file upload

  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)

  })



}

