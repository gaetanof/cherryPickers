import React, { useState, useEffect } from 'react';
import axiosConfig from '../../api/axiosConfig';
import './FindUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import Swal from 'sweetalert2';

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
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la visualización del indicador de carga

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

  const getWindowWidth = () => {
    return window.innerWidth;
  };

  // Estado para almacenar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  // useEffect para actualizar el ancho de la ventana cuando cambia
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    // Agrega un event listener para el evento de redimensionamiento
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setIsLoading(true); // Activa el indicador de carga

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
      setIsLoading(false); // Desactiva el indicador de carga si hay errores
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
        document.body.style.overflow = 'hidden'; // Evita el desplazamiento de la página
        // document.getElementById('root').style.filter = 'blur(5px)';
        await axiosConfig.post('/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        await Swal.fire({
          title: '¡Formulario enviado con éxito!',
          icon: 'success',
          background: 'var(--color-white)',
          color: 'var(--color-black)',
          confirmButtonColor: 'var(--color-black)',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            // Restaurar estilos originales
            document.body.style.overflow = '';
            document.getElementById('root').style.filter = '';
          }
        });
      } catch (err) {
        console.log(err);
        console.error('Error al enviar el formulario:', err);
      } finally {
        setIsLoading(false); // Desactiva el indicador de carga al finalizar el envío
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
  console.log(isLoading); // Agrega esto para depurar

  return (
    <div className="app__bg flex__center section__padding" id="contact">
      {isLoading ? (
        <div className="overlay-loading-indicator">
          <div className="loading-indicator">Cargando...</div>
        </div>
      ) : (
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
            placeholder="Cantidad de ambientes"
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
            {windowWidth > 650 && (
              <div className="findUs-form_button_container">
                <button className="findUs-form button" type="submit">
                  Enviar Formulario
                </button>
              </div>
            )}
            <div className="row">
              {fotos.map((foto) => (
                <div
                  className="col-6 col-sm-4 col-lg-3 square"
                  key={foto.index}
                >
                  <div className="content_img">
                    <button
                      className="position-absolute btn-danger btn-danger-intern"
                      onClick={deleteImg.bind(this, foto.index)}
                    >
                      X
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
          {windowWidth < 650 && (
            <div className="findUs-form_button_container">
              <button className="findUs-form button" type="submit">
                Enviar Formulario
              </button>
            </div>
          )}{' '}
        </form>
      )}
    </div>
  );
}

export default FindUs;
