const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 4000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/", routes);

mongoose
  .connect("mongodb+srv://Sodelayed:dimasik258@teacup.jwwqikp.mongodb.net/")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
