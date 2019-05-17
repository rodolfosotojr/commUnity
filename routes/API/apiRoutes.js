const db = require("../../models");
const passport = require("../../config/passport");
const path = require('path');
const bodyParser = require('body-parser');
const Chatkit = require('@pusher/chatkit-server');

const multer = require('multer');
var cloudinary = require("cloudinary");

const cloudinaryStorage = require("multer-storage-cloudinary");


// ============ CLOUD STORAGE ============
cloudinary.config(process.env.CLOUDINARY_URL);

const cloudStorage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "profile_images",
    allowedFormats: ["jpg", "png", "gif"],
    transformation: [{ width: 500, height: 500, crop: "limit", format: "jpg" }]
});

const parser = multer({ storage: cloudStorage });
// ============ END CLOUD STORAGE ============

// ============ LOCAL STORAGE ============
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './client/public/uploads');
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage }).single('userPhoto');
// ============ END LOCAL STORAGE ============



const upload = multer({ storage: cloudStorage }).single('userPhoto');

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
    //Get resource data
    app.get("/api/data/resources/:tablename", function (req, res) {
        db.Resources.findAll({
            where: {
                resource_department: req.params.tablename
            }
        }).then(function (dbResouces) {
            res.json(dbResouces)
        })
    })

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

    // ================== Map API ==================
    app.get("/api/data/resources/:tablename", function (req, res) {
        db.Resources.findAll({
            where: {
                resource_department: req.params.tablename
            }
        }).then(function (dbResouces) {
            res.json(dbResouces)
        })
    })


    // LOGOUT ROUTE
    // Logout using .logout() method then redirect to login page.
    app.get("/api/logout", function (req, res) {
        res.clearCookie("jwt");
        res.redirect("/");
    });


    // ============ UPLOAD ROUTE ============
    app.post('/api/upload', parser.single('userPhoto'), function (req, res) {

        console.log("req.body.username: ", req.body.username)
        console.log("req.file: ", req.file.url) // to see what is returned to you
        const image = {};
        image.url = req.file.url;
        image.id = req.file.public_id;

        // console.log(req.file.filename);
        // console.log("USERNAME***************\n", req.body.username)
        // console.log("UPLOAD***************\n", req.file.filename)
        //---DB UPDATE USER---

        //---DB UPDATE USER---
        res.end("File is uploaded");

        db.User.update({
            profileImg: image.url
        },
            {
                where: {
                    username: req.body.username
                }
            })
            // ============= Update ChatKit ============
            .then(() => {
                const chatkit = new Chatkit.default({
                    instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
                    key: process.env.REACT_APP_SECRET_KEY,
                });

                chatkit.updateUser({
                    id: req.body.username,
                    avatarURL: image.url
                })
                    .then((response) => {
                        console.log('CHAT User updated successfully\n', response);
                    }).catch((err) => {
                        console.log(err);
                    });
            })
    });
    // ============ END UPLOAD ROUTE ============

}