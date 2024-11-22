//MANIPULAÇÃO DE ARQUIVOS
const fs = require("fs");
//NAVEGAÇÃO PELOS DIRETORIOS
const path = require("path");
const uploadConfig = require("../configs/upload");

//Clase onde alteramos e removemos a imagem
class DiskStorage {
  async saveFile(file){
    await fs.promises.rename(
      //MUDANDO ARQUIVO DE LOCAL (DA PASTA TEMPORARIA PARA A PASTA DEFINITIVA)
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )
  }

  async deleteFile(file){
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    
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

module.exports = DiskStorage;