const db = require("../../models");
const passport = require("../../config/passport");
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const Chatkit = require('@pusher/chatkit-server');

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
        db.User.findAll({
            where: {
                userType: "volunteer"
            }
        })
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
                const profileImg = process.env.NODE_ENV === 'production'
                ? 'https://community-chicago.herokuapp.com//uploads/' + req.file.filename
                : 'http://localhost:3000/uploads/' + req.file.filename;

                db.User.update({
                    profileImg
                },
                    {
                        where: {
                            username: req.body.username
                        }
                    })
                    // TODO ============= Update ChatKit ============
                    .then(() => {
                        const chatkit = new Chatkit.default({
                            instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
                            key: process.env.REACT_APP_SECRET_KEY,
                        });

                        const avatarURL = process.env.NODE_ENV === 'production'
                            ? 'https://community-chicago.herokuapp.com//uploads/' + req.file.filename
                            : 'http://localhost:3000/uploads/' + req.file.filename;

                        chatkit.updateUser({
                            id: req.body.username,
                            avatarURL
                        })
                            .then(() => {
                                console.log('User updated successfully');
                            }).catch((err) => {
                                console.log(err);
                            });
                    })
            }


        });
    });

}