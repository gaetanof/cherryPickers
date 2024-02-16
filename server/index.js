const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 5038;
const connectDB = require("./database/config/db");
const fileUpload = require("express-fileupload");
const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads"
}))
const corsOptions = {
  origin: 'https://cherry-pickers.vercel.app',
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));
app.use("/api", require("./database/routes/propertiesRoutes"));

app.listen(port, console.log(`Server is running`.magenta.bold));
