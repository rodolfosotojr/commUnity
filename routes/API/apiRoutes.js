const db = require("../../models");
const passport = require("../../config/passport");

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
}