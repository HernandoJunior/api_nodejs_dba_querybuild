import { Router } from 'express';
const usersRoutes = Router();

import UsersControllers from "../controllers/UsersControllers.js";
import UserAvatar from "../controllers/UserAvatarController.js";

import getAuthConfig from '../Middlewares/ensureAuth.js';

import MULTER from '../configs/upload.js';
import multer from 'multer';
const upload = multer(MULTER)

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();
const userAvatarController = new UserAvatar();


usersRoutes.post('/', constrollerUser.create)
usersRoutes.put('/', getAuthConfig, constrollerUser.uptade)
usersRoutes.patch('/avatar', getAuthConfig, upload.single("avatar"), userAvatarController.uptade)

export default usersRoutes;