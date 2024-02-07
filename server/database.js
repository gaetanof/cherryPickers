import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise()

export async function getPropertyByID(id) {
  const [row] = await pool.query(
    `SELECT * FROM Propiedades WHERE id = ?`,
    [id]
  );
  return row[0];
};

export async function createProperty(propertyData) {
  try {
    const { nombreCompleto, correoElectronico, numeroTelefono, ubicacionPropiedad, tipoPropiedad, cantidadAmbientes, fotos } = propertyData;
    const result = await pool.query(
      `INSERT INTO Propiedades (nombreCompleto, correoElectronico, numeroTelefono, ubicacionPropiedad, tipoPropiedad, cantidadAmbientes, fotos) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nombreCompleto, correoElectronico, numeroTelefono, ubicacionPropiedad, tipoPropiedad, cantidadAmbientes, fotos]
    );
    return result.insertId; // Retorna el ID de la propiedad creada
  } catch (error) {
    console.error("Error al crear la propiedad:", error);
    throw error;
  }
}
