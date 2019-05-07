var db = require("../../models");
var passport = require("../../config/passport");

module.exports = function (app) {
    // LOGOUT ROUTE
    // Logout using .logout() method then redirect to login page.
    app.get("/api/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
}