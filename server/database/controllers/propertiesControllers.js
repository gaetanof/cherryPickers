// propertiesControllers.js

const Property = require("../models/properties");

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
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json(err);
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
