import { Router } from "express";
import { MyController } from "../controller/MyController";

export function buildRoutes(controller: MyController) {
    const router = Router();
    router.post("/sign_in", controller.signIn);
    router.post("/sign_up", controller.signUp);
    router.get("/health", controller.health);
    router.post("/ping", controller.ping);
    router.post("/pong", controller.pong);
    return router;
}