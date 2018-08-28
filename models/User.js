const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: {
    type: String,
    default: "Blah"
  },
  role: {
    type: String,
    enum: ["Boss", "Dev", "TA"],
    default: "Dev"
  }
});

module.exports = mongoose.model("User", userSchema);
