import { Router } from 'express';

const tagsRoute = Router();
import getAuthConfig from '../Middlewares/ensureAuth.js';

import tagsController from "../controllers/TagsControllers.js";
//instanciando o arquivo UsersControllers
const TagsController = new tagsController();

tagsRoute.get('/', getAuthConfig, TagsController.index)


export default tagsRoute;