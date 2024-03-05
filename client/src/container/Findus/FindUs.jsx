import React, { useState, useEffect } from 'react';
import axiosConfig from '../../api/axiosConfig';
import './FindUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { MdOutlineAddAPhoto } from 'react-icons/md';

function FindUs() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [ubicacionPropiedad, setUbicacionPropiedad] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [cantidadAmbientes, setCantidadAmbientes] = useState('');
  const [fotos, setFotos] = useState([]);
  const [fotosForm, setFotosForm] = useState(null);
  const [errorNombreCompleto, setErrorNombreCompleto] = useState('');
  const [errorCorreoElectronico, setErrorCorreoElectronico] = useState('');
  const [errorNumeroTelefono, setErrorNumeroTelefono] = useState('');
  const [errorUbicacionPropiedad, setErrorUbicacionPropiedad] = useState('');
  const [errorTipoPropiedad, setErrorTipoPropiedad] = useState('');
  const [errorCantidadAmbientes, setErrorCantidadAmbientes] = useState('');
  const [errorFotos, setErrorFotos] = useState('');
  useEffect(() => {
    console.log('Fotos form actualizado:', fotosForm);
  }, [fotosForm]);

  useEffect(() => {
    console.log('Cantidad de amb form actualizado:', cantidadAmbientes);
  }, [cantidadAmbientes]);

  const ambientes = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '+4', value: '+4' },
  ];
  const tipoPropiedades = [
    { label: 'Casa', value: 'Casa' },
    { label: 'Departamento', value: 'Departamento' },
    { label: 'PH', value: 'PH' },
  ];

  const changeInput = (e) => {
    let indexImg;
    const existingPhotos = fotosForm ? [...fotosForm] : [];

    if (fotos.length > 0) {
      indexImg = fotos[fotos.length - 1].index + 1;
    } else {
      indexImg = 0;
    }
    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...fotos, ...newImgsToState];
    setFotos(newImgsState);

    const newPhotos = Array.from(e.target.files);
    const allPhotos = [...existingPhotos, ...newPhotos];
    setFotosForm(allPhotos);
    console.log(allPhotos);
    console.log(fotosForm);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);

      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = fotos.filter(function (element) {
      return element.index !== indice;
    });
    const updatedFiles = newImgs.map((img) => img.file);
    console.log(updatedFiles);
    setFotosForm(updatedFiles);
    setFotos(newImgs);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorFound = false;

    if (nombreCompleto.trim() === '') {
      setErrorNombreCompleto('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorNombreCompleto('');
    }

    if (correoElectronico.trim() === '') {
      setErrorCorreoElectronico('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorCorreoElectronico('');
    }

    if (numeroTelefono.trim() === '') {
      setErrorNumeroTelefono('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorNumeroTelefono('');
    }

    if (ubicacionPropiedad.trim() === '') {
      setErrorUbicacionPropiedad('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorUbicacionPropiedad('');
    }

    if (tipoPropiedad.trim() === '') {
      setErrorTipoPropiedad('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorTipoPropiedad('');
    }

    if (cantidadAmbientes === '') {
      setErrorCantidadAmbientes('(*) campo obligatorio');
      errorFound = true;
    } else {
      setErrorCantidadAmbientes('');
    }

    if (fotosForm && fotosForm.length > 0) {
      fotosForm.forEach((file) => {
        const validExtensions = ['.jpg', 'jpeg', '.png'];
        const fileExtension = file.name.slice(-4).toLowerCase();
        console.log(fileExtension);
        if (!validExtensions.includes(fileExtension)) {
          setErrorFotos(
            'Formato de imagen no contemplado. Por favor, use archivos JPG, JPEG o PNG.'
          );
          errorFound = true;
        } else {
          setErrorFotos('');
        }
      });
    }

    if (errorFound) {
      return;
    }

    const formData = new FormData();
    formData.append('nombreCompleto', nombreCompleto);
    formData.append('correoElectronico', correoElectronico);
    formData.append('numeroTelefono', numeroTelefono);
    formData.append('ubicacionPropiedad', ubicacionPropiedad);
    formData.append('tipoPropiedad', tipoPropiedad);
    formData.append('cantidadAmbientes', cantidadAmbientes);

    if (fotosForm !== null) {
      fotosForm.forEach((file) => {
        formData.append('fotos', file);
      });
    }

    const postData = async (formData) => {
      console.log(formData);
      try {
        await axiosConfig.post('/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('¡Formulario enviado con éxito!');
        window.location.reload();
      } catch (err) {
        console.log(err);
        console.error('Error al enviar el formulario:', err);
      }
    };

    postData(formData);

    setNombreCompleto('');
    setCorreoElectronico('');
    setNumeroTelefono('');
    setUbicacionPropiedad('');
    setTipoPropiedad('');
    setCantidadAmbientes('');
    setFotos([]);
    setFotosForm(null);

    // window.location.reload();
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
        <div className="errorContainer">
          {errorNombreCompleto && (
            <p className="errorFindUsForm">{errorNombreCompleto}</p>
          )}
        </div>
        <input
          type="email"
          name="correoElectronico"
          placeholder="Correo Electrónico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
        <div className="errorContainer">
          {errorCorreoElectronico && (
            <p className="errorFindUsForm">{errorCorreoElectronico}</p>
          )}
        </div>
        <input
          type="text"
          name="numeroTelefono"
          placeholder="Número de Teléfono"
          value={numeroTelefono}
          onChange={(e) => setNumeroTelefono(e.target.value)}
        />
        <div className="errorContainer">
          {errorNumeroTelefono && (
            <p className="errorFindUsForm">{errorNumeroTelefono}</p>
          )}
        </div>
        <input
          type="text"
          name="ubicacionPropiedad"
          placeholder="Ubicación de la Propiedad"
          value={ubicacionPropiedad}
          onChange={(e) => setUbicacionPropiedad(e.target.value)}
        />
        <div className="errorContainer">
          {errorUbicacionPropiedad && (
            <p className="errorFindUsForm">{errorUbicacionPropiedad}</p>
          )}
        </div>
        <Select
          isSearchable={false}
          className="findUs-form-Select"
          name="tipoPropiedad"
          options={tipoPropiedades}
          placeholder="Tipo de Propiedad"
          onChange={(selectedOption) =>
            setTipoPropiedad(selectedOption.value.trim())
          }
          styles={selectStyles} // Condición para seleccionar estilos
        />
        <div className="errorContainer">
          {errorTipoPropiedad && (
            <p className="errorFindUsForm">{errorTipoPropiedad}</p>
          )}
        </div>
        <Select
          isSearchable={false}
          className="findUs-form-Select"
          name="cantidadAmbientes"
          options={ambientes}
          placeholder="Tipo de Propiedad"
          onChange={(selectedOption) =>
            setCantidadAmbientes(selectedOption.value.trim())
          }
          styles={selectStyles} // Condición para seleccionar estilos
        />
        <div className="errorContainer">
          {errorCantidadAmbientes && (
            <p className="errorFindUsForm">{errorCantidadAmbientes}</p>
          )}
        </div>
        <div className="container-fluid">
          <br></br>
          <div className="add-photo-container">
            <h1 className="app__findUs-h1">Mostranos tu unidad:</h1>
            <MdOutlineAddAPhoto
              className="add-photo-button"
              onClick={() => document.getElementById('fileInput').click()}
            />
          </div>
          <label>
            <input
              id="fileInput"
              hidden
              type="file"
              multiple
              onChange={(e) => changeInput(e)}
            ></input>
          </label>
          <div className="row">
            {fotos.map((foto) => (
              <div className="col-6 col-sm-4 col-lg-3 square" key={foto.index}>
                <div className="content_img">
                  <button
                    className="position-absolute btn btn-danger"
                    onClick={deleteImg.bind(this, foto.index)}
                  >
                    x
                  </button>
                  <img
                    alt="Imagen de propiedad"
                    src={foto.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className="img-responsive"
                  ></img>
                </div>
              </div>
            ))}
          </div>
          {errorFotos && <p className="error">{errorFotos}</p>}
        </div>
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
