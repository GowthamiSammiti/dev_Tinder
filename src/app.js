const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("Hello port 3000!!!!!!!hi");
});

app.listen(3000, () => {
  console.log("I am listening at 3000 port");
});
