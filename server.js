const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/blog", (req, res) => {
  res.send("Hi There  am Faruk");
});

mongoose
  .connect("mongodb+srv://organic:organic123@cluster0.lfgpont.mongodb.net/crud")
  .then(() => {
    console.log("mongoDB conected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
