import express from "express";
import "dotenv/config";

const server = express();

const PORT = process.env.PORT ?? 8000;

server.listen(PORT, () => console.log(`Server Running: PORT ${PORT}`));
