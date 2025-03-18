const express = require("express");

const app = express();

const connectDb = require("./config/dataBase");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Nadhu",
    lastName: "S",
    emailId: "Nandhu@gmail.com",
    password: "NS@123",
  });
  try {
    await user.save();
    res.send("user added !!!!!!!!!");
  } catch (error) {
    res.status(500).send("Error with adding user" + error.message);
  }
});

connectDb()
  .then(() => {
    console.log("DataBase Connection Established");
    app.listen(3000, () => {
      console.log("I am listening at 3000 port");
    });
  })
  .catch((err) => {
    console.log("DataBase not connected!!!!!!");
  });
