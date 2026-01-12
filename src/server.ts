import { PORT, SOCKET } from "./config/userConfig.ts";
import { MyController } from "./controller/MyController.ts";
import { buildApp } from "./app.ts";


export const launchServer = async () => {
    const myController = new MyController();
    const app = buildApp(myController);
    
    const server = app.listen(PORT, () => {
        console.log(`Listening on port ${SOCKET}`);
    })

    const shutdown = async () => {
        server.close(async (err) => {
            err ?  process.exit(1) : process.exit(0);
        })

    }
    process.on("SIGINT", () => shutdown());
    process.on("SIGTERM", () => shutdown());
}

