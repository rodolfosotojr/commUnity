const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");

router.use("/auth", authRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;