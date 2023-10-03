const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/again".at, (req, res) => {
  res.send("Hello again!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
