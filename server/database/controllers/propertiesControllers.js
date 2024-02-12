const Property = require("../models/properties");

const controller = {
  getProperties: async (req, res) => {
    try {
      const properties = await Property.find();
      res.status(200).json(properties);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addProperty: async (req, res) => {
    try {
      const property = await Property.create(req.body);
      res.status(201).json(property);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateProperty: async (req, res) => {
    try {
      const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(property);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProperty: async (req, res) => {
    try {
      await Property.findByIdAndDelete(req.params.id);
      res.status(200).json("Property has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = controller;