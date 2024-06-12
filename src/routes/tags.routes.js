const { Router } = require('express');

const tagsRoute = Router();
const getAuthConfig = require('../Middlewares/ensureAuth');

const tagsController = require("../controllers/TagsControllers");
//instanciando o arquivo UsersControllers
const TagsController = new tagsController();

tagsRoute.get('/', getAuthConfig, TagsController.index)


module.exports = tagsRoute;