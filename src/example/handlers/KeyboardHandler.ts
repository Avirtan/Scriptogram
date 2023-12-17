import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IInlineKeyboardButton, IInlineKeyboardMarkup } from "../../bot/types";

export class KeyboardHandler implements IHandler {
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: any): Promise<void> {
    if (data.message?.from == null) {
      return;
    }
    var btn = {
      text: "text",
      callback_data: "call",
    } as IInlineKeyboardButton;
    var keyboard = {
      inline_keyboard: [[btn]],
    } as IInlineKeyboardMarkup;
    this.methodHandler.sendMessage({
      chat_id: data.message["from"]["id"],
      text: "tewt",
      reply_markup: keyboard,
    });
  }
}
