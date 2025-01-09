

//BIBLIOTECA USADA PARA UPLOAD NA APLICAÇÃO
import { diskStorage } from "multer";
import { randomBytes } from "crypto";
import { fileURLToPath } from 'url';
//ARQUIVO DE CONFIG DO UPLOAD
import { dirname, resolve } from 'path';

// Recriar __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Colocanso a pasta em uma variavel
const TMP_FOLDER = resolve(__dirname, "..", "..", "tmp");


const UPLOADS_FOLDER = resolve(TMP_FOLDER, "uploads");



//Biblioteca que usamos para fazer upload de fotos e arquivos
const MULTER = {
  storage: diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback){
      const fileHash = randomBytes(10).toString("hex") //formato hexadecimal
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
      },
  }),
}

export default {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
}