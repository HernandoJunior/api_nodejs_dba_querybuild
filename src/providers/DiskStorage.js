//MODULO PARA MANIPULAÇÃO DE ARQUIVOS
import fs from "fs";

//NAVEGAÇÃO PELOS DIRETORIOS
import path from "path";
import TMP_FOLDER from "../configs/upload.js";


//Clase onde salvamos e removemos a imagem
class DiskStorage {
  //Salvando o arquivo na pasta principal
  async saveFile(file){
    //RENAME RENOMEIA OU MOVE OS ARQUIVOS
    await fs.promises.rename(
      //MUDANDO ARQUIVO DE LOCAL (DA PASTA TEMPORARIA PARA A PASTA DEFINITIVA)
      path.resolve(TMP_FOLDER, file),
      path.resolve(UPLOADS_FOLDER, file)
    )
  }

  //Deletando o arquivo da pagina principal
  async deleteFile(file){
    const filePath = path.resolve(UPLOADS_FOLDER, file)
    
    //VERIFICANDO SE O ARQUIVO EXISTE NO DISCO
    try {
      //retorna o status do aqruivo
      await fs.promises.stat(filePath)
    } catch {
      return;
    }

    await fs.promises.unlink(filePath)
    //REMOVENDO ARQUIVO DO DISCO
  }
}

export default DiskStorage;