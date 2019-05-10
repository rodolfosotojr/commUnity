const db = require("../../models");
const passport = require("../../config/passport");
const multer = require('multer');
const path = require('path');

// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './client/public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage }).single('userPhoto');

module.exports = function (app) {
    //GET route for getting all of my user information
    app.get("/api/posts", function (req, res) {
        db.User.findAll({})
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });
    // LOGOUT ROUTE
    // Logout using .logout() method then redirect to login page.
    app.get("/api/logout", function (req, res) {
        req.logOut();

        res.redirect("/");
    });

    // ------------MULTER ROUTE------------
    app.post('/api/upload', function (req, res) {
        upload(req, res, function (err) {
            if (err) {
                return res.end("Error uploading file.");
            }
            console.log(res)
            res.end("File is uploaded");
        });
    });

}









// const db = require("../../models");
// const passport = require("../../config/passport");
// const multer = require('multer');


// module.exports = function (app) {
//     //GET route for getting all of my user information
//     app.get("/api/posts", function (req, res) {
//         db.User.findAll({})
//             .then(function (dbUser) {
//                 res.json(dbUser);
//             });
//     });
//     // LOGOUT ROUTE
//     // Logout using .logout() method then redirect to login page.
//     app.get("/api/logout", function (req, res) {
//         req.logOut();

//         res.redirect("/");
//     });
//   }

// // SET STORAGE
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
 
// const upload = multer({ storage: storage })


// app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
//   const file = req.file
//   if (!file) {
//     const error = new Error('Please upload a file')
//     error.httpStatusCode = 400
//     return next(error)
//   }
//     res.send(file)
  
// });

// }

// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//       callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//       callback(null, file.fieldname + '-' + Date.now());
//   }
// });
// var upload = multer({ storage: storage }).single('userPhoto');

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post('/api/photo', function (req, res) {
//   upload(req, res, function (err) {
//       if (err) {
//           return res.end("Error uploading file.");
//       }
//       res.end("File is uploaded");
//   });
// });

// app.listen(3000, function () {
//   console.log("Working on port 3000");
// });