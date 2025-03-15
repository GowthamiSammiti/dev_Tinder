const express = require("express");

const app = express();
app.get("/user", (req, res) => {
  console.log("Hey this is Get method for user");
  res.send("Get Success");
});

app.post("/user", (req, res) => {
  console.log("Hey this is POST method for user");
  res.send("POST Success");
});

app.delete("/user", (req, res) => {
  console.log("Hey this is delete method for user");
  res.send("DELETE Success");
});
app.use((req, res) => {
  res.send("Hello port 3000!!!!!!!hi");
});

app.listen(3000, () => {
  console.log("I am listening at 3000 port");
});
