const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 5038;
const connectDB = require("./database/config/db");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});
const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions = {
  origin: ['https://cherry-pickers.vercel.app', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));
app.use("/api", require("./database/routes/propertiesRoutes"));

app.listen(port, console.log(`Server is running`.magenta.bold));


