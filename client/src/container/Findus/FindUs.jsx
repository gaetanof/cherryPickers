import React, { useState } from 'react';
import axiosConfig from '../../api/axiosConfig';
import './FindUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function FindUs() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [ubicacionPropiedad, setUbicacionPropiedad] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [cantidadAmbientes, setCantidadAmbientes] = useState('');
  const [fotos, setFotos] = useState([]);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (fotos.length > 0) {
      indexImg = fotos[fotos.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...fotos, ...newImgsToState];
    setFotos(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);

    const newImgs = fotos.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setFotos(newImgs);
  }

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
    setFotos([]); // Reinicia el estado de fotos
  };

  return (
    <div className="app__bg flex__center section__padding" id="contact">
      <form
        className="findUs-form form_container"
        onSubmit={(e) => handleSubmit(e)}
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
        <h1 className="app__findUs-h1">
          Carga fotos para hacernos un tour virtual de tu propiedad!
        </h1>
        <div className="container-fluid">
          <br></br>
          {/* INPUT IMAGES */}
          <label className="btn btn-warning">
            <span>Cargar imagenes</span>
            <input hidden type="file" multiple onChange={changeInput}></input>
          </label>

          {/* VIEW IMAGES */}
          <div className="row">
            {fotos.map((fotos) => (
              <div className="col-6 col-sm-4 col-lg-3 square" key={fotos.index}>
                <div className="content_img">
                  <button
                    className="position-absolute btn btn-danger"
                    onClick={deleteImg.bind(this, fotos.index)}
                  >
                    x
                  </button>
                  <img
                    alt="algo"
                    src={fotos.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className="img-responsive"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
        <div className="findUs-form_button_container">
          <button className="findUs-form button" type="submit">
            Enviar Formulario
          </button>
        </div>
      </form>
    </div>
  );
}

export default FindUs;
