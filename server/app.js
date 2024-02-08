import express from "express";
import {
  getPropertyByID,
  createProperty,
} from "./database.js"
import cors from "cors";

const corsOptions = {
  origin: "http://127.0.0.1:5173", // specify the allowed origin
  methods: ["POST", "GET"], // specify the allowed methods
  credentials: false, // not allow sending credentials (cookies, authentication)
};

const app = express();
app.use(express.json());


// Obtener una propiedad especifica brindando el ID en el query
app.get("/property", async (req, res) => {
  // Recupera el ID de la propiedad de los parámetros de consulta
  const propertyID = req.query.property_id;

  // Verifica si se proporcionó un ID de propiedad
  if (!propertyID) {
    return res.status(400).send("Se requiere el ID de la propiedad");
  }

  // Llama a la función para obtener la propiedad por ID
  try {
    const property = await getPropertyByID(propertyID);
    res.status(200).send(property);
  } catch (error) {
    console.error("Error al obtener la propiedad:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Crear una nueva propiedad
app.post("/property", async (req, res) => {
  const propertyData = req.body;

  try {
    const propertyID = await createProperty(propertyData);
    res.status(201).send({ id: propertyID });
  } catch (error) {
    console.error("Error al crear la propiedad:", error);
    res.status(500).send("Error interno del servidor");
  }
});


app.listen(8080, () => {
  console.log("server running on port 8080")
})