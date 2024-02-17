// propertiesControllers.js
const Property = require("../models/properties");
const cloudinary = require("cloudinary").v2;
const fs = require("fs-extra")
const { Readable } = require('stream');

async function uploadToCloudinary(file) {

  let imageName = `propiedad_${Date.now()}`

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({
      folder: 'propiedades',
      public_id: imageName,
      overwrite: true,
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });

    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);
    readableStream.pipe(stream);
  });
}

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
    let imageNames = [];
    if (req.files.length > 0) {
      for (let file of req.files) {
        const uploadResult = await uploadToCloudinary(file);
        if (uploadResult.error) {
          console.error(
            "Hubo un problema al subir la imagen a Cloudinary. " +
            uploadResult.error
          );
        } else {
          imageNames.push(uploadResult.secure_url);
        }
      }
    }
    let newProperty = new Property({
      nombreCompleto: req.body.nombreCompleto,
      correoElectronico: req.body.correoElectronico,
      numeroTelefono: req.body.numeroTelefono,
      ubicacionPropiedad: req.body.ubicacionPropiedad,
      tipoPropiedad: req.body.tipoPropiedad,
      cantidadAmbientes: req.body.cantidadAmbientes,
      fotos: imageNames,
    });

    let property = await newProperty.save();
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
