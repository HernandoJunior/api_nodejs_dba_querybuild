const Router = require("express");
const userRouter = require('./users.routes');
const notesRoute = require("./notes.routes");
const tagsRouter = require("./tags.routes")
const sessionRoutes = require("./sessions.routes")

const routes = Router();
//userRouter sendo chamada quando utilizar a rota /users
routes.use("/users", userRouter);
routes.use("/sessions", sessionRoutes);
routes.use("/notes", notesRoute);
routes.use("/tags", tagsRouter);

module.exports = routes;