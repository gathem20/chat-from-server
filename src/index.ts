import express from "express";
import dotenv from "dotenv";
import "../database/db";

dotenv.config();
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`sever running`);
});
