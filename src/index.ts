import express from "express";
import router from "./router";
import { MongoClient } from "./database/mongo";
import "dotenv/config";

const runServer = async () => {
  const server = express();

  server.use(express.json());

  await MongoClient.connect();

  server.use(router);

  const PORT = process.env.PORT ?? 8000;

  server.listen(PORT, () => console.log(`Server Running: PORT ${PORT}`));
};

runServer();
