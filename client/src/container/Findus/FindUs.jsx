import React, { useState } from 'react';
import axiosConfig from '../../api/axiosConfig';
import './FindUs.css';

function FindUs() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [ubicacionPropiedad, setUbicacionPropiedad] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [cantidadAmbientes, setCantidadAmbientes] = useState('');
  const [fotos, setFotos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const propiedad = {
      nombreCompleto,
      correoElectronico,
      numeroTelefono,
      ubicacionPropiedad,
      tipoPropiedad,
      cantidadAmbientes,
      fotos,
    };

    const postData = async (propiedad) => {
      try {
        await axiosConfig.post('/add', propiedad);
        alert('¡Formulario enviado con éxito!');
      } catch (err) {
        console.log(err);
        console.error('Error al enviar el formulario:', err);
      }
    };

    postData(propiedad);

    setNombreCompleto('');
    setCorreoElectronico('');
    setNumeroTelefono('');
    setUbicacionPropiedad('');
    setTipoPropiedad('');
    setCantidadAmbientes('');
    setFotos('');
  };

  return (
    <form className="findUs-form" onSubmit={(e) => handleSubmit(e)}>
      <div
        className="app__findUs app__bg flex__center section__padding"
        id="contact"
      >
        <input
          type="text"
          name="nombreCompleto"
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
        />
        <input
          type="email"
          name="correoElectronico"
          placeholder="Correo Electrónico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
        <input
          type="text"
          name="numeroTelefono"
          placeholder="Número de Teléfono"
          value={numeroTelefono}
          onChange={(e) => setNumeroTelefono(e.target.value)}
        />
        <input
          type="text"
          name="ubicacionPropiedad"
          placeholder="Ubicación de la Propiedad"
          value={ubicacionPropiedad}
          onChange={(e) => setUbicacionPropiedad(e.target.value)}
        />
        <input
          type="text"
          name="tipoPropiedad"
          placeholder="Tipo de Propiedad"
          value={tipoPropiedad}
          onChange={(e) => setTipoPropiedad(e.target.value)}
        />
        <input
          type="text"
          name="cantidadAmbientes"
          placeholder="Cantidad de Ambientes"
          value={cantidadAmbientes}
          onChange={(e) => setCantidadAmbientes(e.target.value)}
        />
        <input
          type="text"
          name="fotos"
          placeholder="Fotos"
          value={fotos}
          onChange={(e) => setFotos(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default FindUs;
