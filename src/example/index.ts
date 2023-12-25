import { IUpdate, Scriptogram } from "..";
import { MessageHandler } from "./handlers/MessageHandler";

const bot = new Scriptogram("token");

bot.SetHandler(new MessageHandler());
// bot.SetHandler(new KeyboardHandler());
bot.On("/test", (update: IUpdate) => {
  // console.log(update);
});
bot.StartUpdate();
