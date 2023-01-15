const dotenv = require("dotenv");
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

dotenv.config({ path: "./.env" });
const cors = require("cors");
const path = require("path");

app.use(cors());
// app.use(require("./router/auth"));

const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const database = process.env.DATABASEURL;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(
      database
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Routes go here
app.get("/", (req, res) => {
  res.send("hello from server");
});
app.use(require("./auth"));

//Connect to the database before listening
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});
