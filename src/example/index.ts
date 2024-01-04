import { IUpdate, Scriptogram, UserDataRequest } from "..";
import { KeyboardHandler } from "./handlers/KeyboardHandler";
import { MessageHandler } from "./handlers/MessageHandler";

const bot = new Scriptogram("token");
// use handlers
bot.SetHandler(new MessageHandler());
bot.SetHandler(new KeyboardHandler());

//use callback
bot.On("/command", async (update: IUpdate, userDataRequest?: UserDataRequest) => {
  await bot.MethodHandler.sendMessage({
    chat_id: userDataRequest?.IdUser!,
    text: "tewt",
  });
});
bot.StartUpdate();
