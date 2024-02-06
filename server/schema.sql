CREATE DATABASE cherry_pickers;

USE cherry_pickers;

CREATE TABLE IF NOT EXISTS Propiedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreCompleto VARCHAR(255) NOT NULL,
    correoElectronico VARCHAR(255) NOT NULL,
    numeroTelefono VARCHAR(15) NOT NULL,
    ubicacionPropiedad VARCHAR(255) NOT NULL,
    tipoPropiedad VARCHAR(50) NOT NULL,
    cantidadAmbientes INT NOT NULL,
    fotos VARCHAR(255), -- Puedes almacenar las rutas de las fotos
    fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insertar datos de propiedades en la tabla "Propiedades" para Juan Román Riquelme
INSERT INTO Propiedades (nombreCompleto, correoElectronico, numeroTelefono, ubicacionPropiedad, tipoPropiedad, cantidadAmbientes, fotos, fechaCreacion)
VALUES ('Juan Román Riquelme', 'riquelme@example.com', '555-5678', 'La Boca', 'Departamento', 4, 'ruta_a_la_foto_riquelme.jpg', NOW());
INSERT INTO Propiedades (nombreCompleto, correoElectronico, numeroTelefono, ubicacionPropiedad, tipoPropiedad, cantidadAmbientes, fotos, fechaCreacion)
VALUES ('Carlos Tevez', 'tevez@example.com', '555-8765', 'La Boca', 'Casa', 6, 'ruta_a_la_foto_tevez.jpg', NOW());
