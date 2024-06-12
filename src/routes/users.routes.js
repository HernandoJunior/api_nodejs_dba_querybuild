const express = require('express');
const UsersControllers = require("../controllers/UsersControllers")
const router = express.Router();
const getAuthConfig = require('../Middlewares/ensureAuth');

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();


router.post('/', constrollerUser.create)
router.put('/', getAuthConfig, constrollerUser.uptade)

module.exports = router;