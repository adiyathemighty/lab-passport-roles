const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");

const User = require("../models/User");

router.use(ensureLogin.ensureLoggedIn("/auth/log-in"));

router.get("/list", (req, res) => {
  const { user } = req.user;
  User.find().then(employees => {
    if (req.user.role === "Boss") {
      res.render("employeeList", { employees, boss: true });
    } else {
      res.render("employeeList", { employees, boss: false });
    }
  });
});

router.post("/new", (req, res) => {
  const { username, role } = req.body;
  new User({ username, role }).save().then(employee => {
    res.redirect("/employees/list");
  });
});

router.post("/delete", (req, res) => {
  const { _id } = req.body;

  User.findById({ _id: _id }).then(employee => {
    employee.remove();
    res.redirect("/employees/list");
  });
});

module.exports = router;
