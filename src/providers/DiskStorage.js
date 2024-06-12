//MANIPULAÇÃO DE ARQUIVOS
const fs = require("fs");
//NAVEGAÇÃO PELOS DIRETORIOS
const path = require("path");
const uploadConfig = require("../configs/upload");

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
    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage;