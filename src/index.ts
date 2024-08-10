import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "../database/db";
import { Socket_server } from "./socket/socketio";
import METHODS from "http";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["get", "post"],
  })
);
const port = 8000;
const server = app.listen(port, () => {
  console.log(`server running`);
});

export const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    METHODS: ["get", "post"],
  },
});
Socket_server();
