const express = require('express');
const UsersControllers = require("../controllers/UsersControllers")
const usersRoutes = express.Router();
const getAuthConfig = require('../Middlewares/ensureAuth');

const uploarConfig = require('../configs/upload')
const multer = require('multer');
const upload = multer(uploarConfig.MULTER)

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();


usersRoutes.post('/', constrollerUser.create)
usersRoutes.put('/', getAuthConfig, constrollerUser.uptade)
usersRoutes.patch('/avatar', getAuthConfig, upload.single("avatar"), (request, response) => {
  console.log(request.file.filename); 
   return response.json();
})

module.exports = usersRoutes;