const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: {
    type: String,
    default: "$2b$10$f/2AEslIrtgiWCZ.0W/GW.pvYBTLa8PqBk1toUT10AX.e2AIiYTNu"
  },
  role: {
    type: String,
    enum: ["Boss", "Dev", "TA"],
    default: "Dev"
  }
});

module.exports = mongoose.model("User", userSchema);
