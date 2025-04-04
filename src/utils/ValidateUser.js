const validator = require("validator");
const ValidateUser = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Enter valid Name!!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Enter valid Email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter valid password");
  }
};
module.exports = {
  ValidateUser,
};
