import { io } from "../index";


export const Active_User = new Map();
export function Socket_server() {
  io.on("connection", (client: any) => {
    console.log("connect to socket", client.id);
    client.on("connect user", (data: any) => {
      let obj = {
        user_id: data.id,
        socket_id: data.id,
      };
      Active_User.set(data.id, obj);
    });
    client.on("disconnect", () => {
      console.log("disconnect to socket", client.id);
      io.emit("send message", "helloworld");
      io.on("receive message", (message: any) => {
        console.log("new message", message);
      });
    });
  });
}
