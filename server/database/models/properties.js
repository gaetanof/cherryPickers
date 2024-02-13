const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true
  },
  correoElectronico: {
    type: String,
    required: true
  },
  numeroTelefono: {
    type: String,
    required: true
  },
  ubicacionPropiedad: {
    type: String,
    required: true
  },
  tipoPropiedad: {
    type: String,
    required: true
  },
  cantidadAmbientes: {
    type: Number,
    required: true
  },
  fotos: [String] // Arreglo de URLs de las fotos (opcional)
},
  {
    timestamps: true,
    versionKey: false,
  })

const PropertiesModel = mongoose.model("properties", propertiesSchema)

module.exports = PropertiesModel;