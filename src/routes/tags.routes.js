const { Router } = require('express');

const tagsRoute = Router();

const tagsController = require("../controllers/TagsControllers");
//instanciando o arquivo UsersControllers
const TagsController = new tagsController();


tagsRoute.get('/:user_id', TagsController.index)


module.exports = tagsRoute;