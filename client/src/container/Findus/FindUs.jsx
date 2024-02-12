import React, { useState } from 'react';
import axios from 'axios';
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
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await axios.post('/property', formDataToSend); // Envía los datos del formulario al servidor
      alert('¡Formulario enviado con éxito!');
      // Aquí podrías redirigir al usuario a una página de éxito o realizar alguna otra acción
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
