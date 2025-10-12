import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IInlineKeyboardButton, IInlineKeyboardMarkup, IUpdate } from "../../bot/types";

export class KeyboardHandler implements IHandler {
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: IUpdate): Promise<void> {
    if (data.message?.from == null) {
      return;
    }
    //create btn
    //создание кнопки
    var btn = {
      text: "text",
      callback_data: "data",
    } as IInlineKeyboardButton;
    //create keyboard with btn
    //создание клавиатуры с кнопкой
    var keyboard = {
      inline_keyboard: [[btn]],
    } as IInlineKeyboardMarkup;
    //send message
    //отправка сообщения пользователю
    this.methodHandler.sendMessage({
      chat_id: data.message["from"]["id"],
      text: "textFromKeyboardHandlerAndBtn",
      reply_markup: keyboard,
    });
  }
}
