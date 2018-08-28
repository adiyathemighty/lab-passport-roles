const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const flash = require("connect-flash");

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.post("/sign-up", (req, res) => {
  const { username, password, role } = req.body;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  new User({ username, password: encryptedPassword, role })
    .save()
    .then(user => {
      res.send("user created");
    })
    .catch(console.error);
});

router.get("/log-in", (req, res, next) => {
  res.render("log-in");
});

router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/sign-up",
    failureFlash: true
  })
);

module.exports = router;
