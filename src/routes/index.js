const Router = require("express");
const userRouter = require("./users.routes");
const notesRoute = require("./notes.routes");

const routes = Router();
//userRouter sendo chamada quando utilizar a rota /users
routes.use("/users", userRouter);
routes.use("/notes", notesRoute);

module.exports = routes;