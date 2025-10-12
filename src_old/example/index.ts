import { IUpdate, Scriptogram, UserDataRequest } from "..";
import { KeyboardHandler } from "./handlers/KeyboardHandler";
import { MessageHandler } from "./handlers/MessageHandler";
import { State } from "./state";

const bot = new Scriptogram("token");
var state = new State();
bot.use(async (update: IUpdate, dataRequestUser?: UserDataRequest) => {
  console.log(dataRequestUser?.Message);
  if (dataRequestUser?.Message == "test") {
    await bot.MethodHandler.sendMessage({
      chat_id: dataRequestUser?.IdUser!,
      text: "test",
    });
    return false;
  }
  return true;
});
bot.use(async (update: IUpdate, dataRequestUser?: UserDataRequest) => {
  if (dataRequestUser?.Message == "test1") {
    await bot.MethodHandler.sendMessage({
      chat_id: dataRequestUser?.IdUser!,
      text: "test1",
    });
    return false;
  }
  return true;
});
bot.setState(state);
// use handlers
// bot.SetHandler(new MessageHandler(state));
// bot.SetHandler(new KeyboardHandler());

//use callback
bot.OnCommand("/command", async (update: IUpdate) => {
  await bot.MethodHandler.sendMessage({
    chat_id: update?.message?.from?.id!,
    text: "tewt",
  });
});
bot.OnUpdate(async (update: IUpdate, dataRequestUser?: UserDataRequest) => {
  await bot.MethodHandler.sendMessage({
    chat_id: dataRequestUser?.IdUser!,
    text: "tewt",
  });
});
bot.StartUpdate();
