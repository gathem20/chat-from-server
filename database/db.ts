import { createConnection } from "typeorm";
import { User } from "../entities/user.entity";

export const db = createConnection({
  type: "mysql",
  host: "localhost",
  database: "chatApp",
  username: "gathem",
  password: "123",
  port: 3306,
  entities: [User],
  synchronize: false,
});
