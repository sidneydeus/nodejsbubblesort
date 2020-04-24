import { Router } from "express";

import SortController from "./app/controllers/SortController";

const routes = new Router();

routes.post("/sort", SortController.index);

export default routes;
