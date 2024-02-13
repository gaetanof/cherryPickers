const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const port = 3000;
const connectDB = require("./database/config/db");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", require("./database/routes/propertiesRoutes"));

app.listen(port, console.log(`Server is running`.magenta.bold));

