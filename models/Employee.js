const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  role: {
    type: String,
    enum: ["TA", "Dev"]
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
