const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 4, maxLength: 50 },
  lastName: { type: String, minLength: 4, maxLength: 50 },
  emailId: { type: String },
  password: { type: String },
  age: { type: Number },
  gender: { type: String },
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
