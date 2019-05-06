const router = require("express").Router();
const facebookRoutes = require("./facebook");
const localRoutes = require("./local");
const registerRoute = require("./register");

router.use("/facebook", facebookRoutes);
router.use("/local", localRoutes);
router.use("/register", registerRoute);

module.exports = router;