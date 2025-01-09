import Router from "express";
import userRouter from './users.routes.js';
import notesRoute from "./notes.routes.js";
import tagsRouter from "./tags.routes.js";
import sessionRoutes from "./sessions.routes.js";

const routes = Router();
//userRouter sendo chamada quando utilizar a rota /users
routes.use("/users", userRouter);
routes.use("/sessions", sessionRoutes);
routes.use("/notes", notesRoute);
routes.use("/tags", tagsRouter);

export default routes;