const router = require("express").Router();
const facebookRoutes = require("./facebook");

router.use("/facebook", facebookRoutes);

module.exports = router;