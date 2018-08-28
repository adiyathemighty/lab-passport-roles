const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");

router.use(ensureLogin.ensureLoggedIn("/auth/log-in"));

router.get("/", (req, res) => {
  const user = req.user;
  res.render("profile", user);
});

router.get("/:id", (req, res) => {
  const _id = req.params.id;
  User.findById({ _id }).then(employee => {
    res.render("profile", employee);
  });
});

router.post("/edit", (req, res) => {
  const { username, role } = req.body;

  new User({ username, role }).save().then(user => {
    res.redirect("/employees/list");
  });
});

module.exports = router;
