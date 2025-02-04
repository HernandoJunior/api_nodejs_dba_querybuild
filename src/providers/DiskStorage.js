//MODULO PARA MANIPULAÇÃO DE ARQUIVOS
import fs from "fs";

//NAVEGAÇÃO PELOS DIRETORIOS
import path from "path";
import uploadConfig from "../configs/upload.js";

const { TMP_FOLDER, UPLOADS_FOLDER } = uploadConfig;


//Clase onde salvamos e removemos a imagem
class DiskStorage {
  async saveFile(file) {
    const tempFilePath = path.resolve(TMP_FOLDER, file);

    const fileExists = fs.existsSync(tempFilePath);
    console.log("O arquivo existe?", fileExists);
  
    if (!fileExists) {
      throw new Error(`O arquivo ${file} não foi encontrado na pasta temporária!`);
    }
    //Salvando o arquivo na pasta principal
    // Caminho do arquivo na pasta temporária
    const uploadFilePath = path.resolve(UPLOADS_FOLDER, file); // Caminho do arquivo na pasta final

    // Verificar se os caminhos de origem e destino são diferentes
    if (tempFilePath === uploadFilePath) {
      throw new Error('O arquivo de origem e destino não podem ser o mesmo!');
    }

    // Garantir que a pasta de destino exista
    if (!fs.existsSync(UPLOADS_FOLDER)) {
      fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
    }

    // Mover o arquivo
    console.log('Movendo arquivo de:', tempFilePath, 'para:', uploadFilePath);
    await fs.promises.rename(tempFilePath, uploadFilePath);

    return file;
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