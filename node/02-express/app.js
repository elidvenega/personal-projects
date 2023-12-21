const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/animal", (req, res) => {
  res.send("You have come to the animals section ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
