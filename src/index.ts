import { TBot } from "./bot/Tbot";
import { InlineQueryHandler } from "./bot/handlers/InlineQueryHandler";
import { MessageHandler } from "./bot/handlers/MessageHandler";
import { TypeUpdate } from "./bot/utils/Enum";

var token = "6584315900:AAHVPF9Xx_ydCfyVPZn1h_S3OPLRtWTpZ9c";

const bot = new TBot(token);

bot.SetHandler(new MessageHandler());
bot.SetHandler(new InlineQueryHandler());

bot.StartUpdate();

// const type = TypeMessage.Message | TypeMessage.InlineQuery;

// console.log(type);
