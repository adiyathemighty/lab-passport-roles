const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");

const User = require("../models/User");

router.use(ensureLogin.ensureLoggedIn("/employees/list"));

router.get("/list", (req, res) => {
  res.send("employee list");
});

module.exports = router;
