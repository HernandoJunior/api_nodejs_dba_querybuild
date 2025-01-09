import DiskStorage from '../providers/DiskStorage.js';
import knex from '../database/knex/index.js';
import AppError from'../utils/AppError.js'

class UserAvatar{
  async uptade(request, response) {
    console.log(request)
    const user_id = Number(request.user.id);
    const avatarFileName = request.file.originalname;

    const diskStorage = new DiskStorage();

    const user = await knex('users').where({ id : user_id }).first();
    console.log(user_id, avatarFileName);
      
      if(!user){
        throw new AppError("Somente usuarios autenticados podem mudar o avatar", 401);
      }

      const filename = await diskStorage.SaveFile(avatarFilename)
      user.avatar = filename;

      if (user.avatar) {
        await diskStorage.deleteFile(avatarFileName);
      }

      await knex("users").update(user).where({ id : user_id })
      
      return response.json(user)
  }
}

export default UserAvatar;