const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/devTinder");
};

module.exports = connectDb;