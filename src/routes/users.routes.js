const express = require('express');
const usersRoutes = express.Router();

const UsersControllers = require("../controllers/UsersControllers")
const UserAvatar = require("../controllers/UserAvatarController")

const getAuthConfig = require('../Middlewares/ensureAuth');

const uploarConfig = require('../configs/upload')
const multer = require('multer');
const upload = multer(uploarConfig.MULTER)

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();
const userAvatarController = new UserAvatar();


usersRoutes.post('/', constrollerUser.create)
usersRoutes.put('/', getAuthConfig, constrollerUser.uptade)
usersRoutes.patch('/avatar', getAuthConfig, upload.single("avatar"), userAvatarController.uptade)

module.exports = usersRoutes;