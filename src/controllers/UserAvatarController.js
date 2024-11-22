const DiskStorage = require('../providers/DiskStorage');
const knex = require('../database/knex');
const AppError = require('../utils/AppError')

class UserAvatar{
  async uptade(request, response) {
    const user_id = request.user.id;
    const avatarFileName = request.file.file_name;

    const diskStorage = new DiskStorage();

    const user = (await knex('users').where({ id : user_id })).first();
    console.log(user_id, avatarFileName);
      
      if(!user){
        throw new AppError("Somente usuarios autenticados podem mudar o avatar", 401);
      }

      const filename = diskStorage.saveFile(avatarFileName);
      user.avatar = filename;

      if (user.avatar) {
        await diskStorage.deleteFile(avatarFileName);
      }

      await knex("users").update(user).where({ id : user_id })
      
      return response.json(user)
  }
}

module.exports = UserAvatar;