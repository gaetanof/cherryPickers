const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./database/config/db");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", require("./database/routes/propertiesRoutes"));

// Endpoint para indicar que es una API
app.get("/", (req, res) => {
  res.send("¡Hola! Soy una API.");
});

app.listen(port, console.log(`Server is running`.magenta.bold));
