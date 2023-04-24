const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
