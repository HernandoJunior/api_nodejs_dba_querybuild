import DiskStorage from '../providers/DiskStorage.js';
import knex from '../database/knex/index.js';
import AppError from '../utils/AppError.js';

class UserAvatar {
  async update( request, response ){
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    console.log(request);
    const diskStorage = new DiskStorage()

    const user = await knex("users").where({id: user_id}).first();

    if(!user){
        throw new AppError("Usuário não encontrado", 401);
    }

    if(user.avatar){
        await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    consolelog(filename);

    user.avatar = filename;

    await knex("users").update(user).where({id: user_id});

    return response.json(user)
  }
}

export default UserAvatar;
