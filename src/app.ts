import express from "express";
import { MyController } from "./controller/MyController.js";
import { buildRoutes } from "./routes/routes.js";


export function buildApp(controller: MyController) {
    const app = express();
    app.use(express.json());
    app.use(buildRoutes(controller));
    return app;
}