const express = require("express");

const app = express();

const connectDb = require("./config/dataBase");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user added !!!!!!!!!");
  } catch (error) {
    res.status(500).send("Error with adding user" + error.message);
  }
});

app.get("/getUser", async (req, res) => {
  try {
    const user = await User.findOne({ emailId: req.body.emailId });
    if (user) {
      res.send(user);
    } else {
      res.status(400).send("User not found!!! ");
    }
  } catch (error) {
    res.status(400).send("Spmething is wrong!!!");
  }
});
app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      res.send(users);
    } else {
      res.status(400).send("User not found!!! ");
    }
  } catch (error) {
    res.status(400).send("Spmething is wrong!!!");
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
