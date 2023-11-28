import { TBot } from "./bot/Tbot";
import { IUpdate } from "./bot/types/core/IResponse";
import { InlineQueryHandler } from "./example/handlers/InlineQueryHandler";
import { MessageHandler } from "./example/handlers/MessageHandler";

var token = "6584315900:AAHsf2CpLAsnuyl5H1CyB-gOy4wv8S9TIMI";

const bot = new TBot(token);

// bot.SetHandler(new MessageHandler());
bot.SetHandler(new InlineQueryHandler());
bot.On("/test", (update: IUpdate) => {
  console.log(update);
});
bot.StartUpdate();
