import { createConnection } from "typeorm";

export const db = createConnection({
  type: "mysql",
  host: "localhost",
  database: "chatApp",
  username: "main",
  password: "",
  port: 3306,
  entities: [],
});
