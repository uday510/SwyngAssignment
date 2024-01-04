const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const app = express();

// Logs time for every request
function requestTime(req, res, next) {
  process.stdout.write(
    `Request-Date: ${new Date().toString()} ${req.method} ${req.url} \n`
  );
  next();
}

app.use(requestTime); // logs request time
console.clear();
app.use(cors({
  origin: 'https://slot-booking-beryl.vercel.app/', // Replace with your frontend URL
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}));

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

