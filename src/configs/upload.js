//ARQUIVO DE CONFIG DO UPLOAD

const path = require("path");
//BIBLIOTECA USADA PARA UPLOAD NA APLICAÇÃO
const multer = require("multer");
const crypto = require("crypto");

//Colocanso a pasta em uma variavel
const TMP_FOLDER = path.resolve(__dirname, "../../tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

//Biblioteca que usamos para fazer upload de fotos e arquivos
const MULTER = {
  storage: multer.diskStorage({
    destination: TMP,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString("hex") //formato hexadecimal
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
      }
  })
}

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
}