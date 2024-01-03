const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const app = express();

console.clear();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

mongoose
  .connect(dbConfig.DB_URL)
  .then(() => {
    app.listen(4000, () => console.log("Server started"));
  })
  .catch((err) => {
    console.log(err.message);
  });

