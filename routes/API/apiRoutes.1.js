const db = require("../../models");
const passport = require("../../config/passport");
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './client/public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
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
    // app.post('/api/upload', function (req, res) {
    //     console.log(req.body.formData)
    //     upload(req.body.formData, res, function (err) {
    //         if (err) {
    //             return res.end("Error uploading file.");
    //         }
    //         console.log(res)
    //         res.end("File is uploaded");
    //     });
    // });

    app.post('/api/upload', function (req, res) {
        // console.log(req.body.username)

        upload(req, res, function (err) {
            if (err) {
                return res.end("Error uploading file.");
            } else {

                // console.log(req.file.filename);
                console.log("USERNAME***************\n", req.body.username)
                console.log("UPLOAD***************\n", req.file.filename)
                //---DB UPDATE USER---

                //---DB UPDATE USER---
                res.end("File is uploaded");
                db.User.update({
                    profileImg: req.file.filename
                },
                    {
                        where: {
                            username: req.body.username
                        }
                    })
            }


        });
    });

    //Get route for getting all the resources information
    app.post("/api/resources", function (req, res) {
        db.Resources.findAll({
            where: {
                resource_department: req.body.resource_department
            }
        })
            .then(dbres => {
                res.json(dbres)
            });
    });

} // END EXPORTS