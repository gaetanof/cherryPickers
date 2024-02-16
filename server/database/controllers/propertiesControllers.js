// propertiesControllers.js
const Property = require("../models/properties");
const uploadImage = require("../config/cloudinary.js");
const fs = require("fs-extra")

const getProperties = async (req, res) => {
  try {
    if (!res) {
      console.error("Response object is undefined in getProperties function");
    }
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addProperty = async (req, res) => {
  try {
    if (!res) {
      console.error("Response object is undefined in addProperty function");
    }

    if (req.files?.fotos) {
      let fotosArray = req.files.fotos;
      if (!Array.isArray(fotosArray)) {
        fotosArray = [fotosArray]; // Envolver en un arreglo si no es un arreglo
      }

      const fotosPromises = fotosArray.map(async (foto) => {
        const result = await uploadImage(foto.tempFilePath);
        return {
          public_id: result.public_id,
          secure_url: result.secure_url
        };
      });

      const fotos = await Promise.all(fotosPromises);
      req.body.fotos = fotos;

      // Eliminar archivos temporales después de subir las fotos
      await Promise.all(fotosArray.map(async (foto) => {
        await fs.unlink(foto.tempFilePath);
      }));
    }

    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};



const updateProperty = async (req, res) => {
  try {
    if (!res) {
      console.error("Response object is undefined in updateProperty function");
    }
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProperty = async (req, res) => {
  try {
    if (!res) {
      console.error("Response object is undefined in deleteProperty function");
    }
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty
};
