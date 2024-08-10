import { io } from "../index";
import { disconnect } from "process";

export const Active_User = Array();
export function Socket_server() {
  io.on("connection", (client: any) => {
    console.log("connect to socket", client.id);
    client.on("connect user", (data: any) => {
      let obj = {
        user_id: data.id,
        socket_id: data.id,
      };
    });
    client.on("disconnect", () => {
      console.log("disconnect to socket", client.id);
    });
  });
}
