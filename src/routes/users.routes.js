const express = require('express');
const router = express.Router();
const UsersControllers = require("../controllers/UsersControllers")

//instanciando o arquivo UsersControllers
const constrollerUser = new UsersControllers();

router.post('/', constrollerUser.create)

module.exports = router;