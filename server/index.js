const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 5038;
const connectDB = require("./database/config/db");
const Property = require("/server/database/models/properties");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", require("./database/routes/propertiesRoutes"));

// Endpoint para indicar que es una API
app.get("/", async (req, res) => {
  const properties = await Property.find();
  res.status(200).json(properties);
});

app.listen(port, console.log(`Server is running`.magenta.bold));
