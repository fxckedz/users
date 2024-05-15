import express from "express";
import router from "./router";
import "dotenv/config";

const server = express();

server.use(router);

const PORT = process.env.PORT ?? 8000;

server.listen(PORT, () => console.log(`Server Running: PORT ${PORT}`));
