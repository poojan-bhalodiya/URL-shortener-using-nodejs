const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const urlRoutes = require('./routes/urlRoutes');

// Load environment variables
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/', urlRoutes);

app.listen(port, (req, res) => {
  console.log(`Port is running on ${port}`);
});
