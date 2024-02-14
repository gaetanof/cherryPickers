import React, { useState } from 'react';
import axiosConfig from '../../api/axiosConfig';
import './FindUs.css';

const FindUs = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    ubicacion: '',
    tipoPropiedad: '',
    cantidadAmbientes: '',
    fotos: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que el campo nombre no esté vacío
    if (!formData.nombre.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    try {
      // Envía los datos del formulario utilizando la configuración de Axios
      await axiosConfig.post('/add', {
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        ubicacion: formData.ubicacion,
        tipoPropiedad: formData.tipoPropiedad,
        cantidadAmbientes: formData.cantidadAmbientes,
        fotos: formData.fotos, // Este campo puede necesitar un tratamiento especial si estás enviando archivos
      });
      alert('¡Formulario enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert(
        'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.'
      );
    }
  };

  return (
    <div
      className="app__findUs app__bg flex__center section__padding"
      id="contact"
    >
      <div className="app__findUs-content flex__center">
        <div className="app__findUs-content_history findUs-text-back">
          <h1 className="app__findUs-h1">Contacto</h1>
          <form onSubmit={handleSubmit} className="findUs-form">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={formData.correo}
              onChange={handleChange}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Número de Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              type="text"
              name="ubicacion"
              placeholder="Ubicación de la Propiedad"
              value={formData.ubicacion}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tipoPropiedad"
              placeholder="Tipo de Propiedad"
              value={formData.tipoPropiedad}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cantidadAmbientes"
              placeholder="Cantidad de Ambientes"
              value={formData.cantidadAmbientes}
              onChange={handleChange}
            />
            <input
              type="file"
              name="fotos"
              placeholder="Fotos"
              value={formData.fotos}
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
