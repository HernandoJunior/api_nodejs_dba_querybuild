const Router = require("express");
const userRouter = require("./users.routes");


const routes = Router();
//userRouter sendo chamada quando utilizar a rota /users
routes.use("/users", userRouter);

module.exports = routes;