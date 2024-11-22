const { diskStorage } = require('multer');
const knex = require('../database/knex');
const AppError = require('../utils/AppError')

class UserAvatar{
  async uptade(request, response) {
    const user_id = request.user.user_id
    const avatarFileName = request.file.file_name

    const user = await knex("users")
      .where({ id : user_id }).first()
      
      if(!user){
        throw new AppError("Somente usuarios autenticados podem mudar o avatar", 401);
      }

      if (user.avatar) {
        await diskStorage.deletefile(user.avatar)
      }

      const filename = diskStorage.saveFile(avatarFileName)
      user.avatar = filename

      await knex("users").update(user).where({ id : user })
      
      return response.json(user)
  }
}

module.exports = UserAvatar;