import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IUpdate } from "../../bot/types";

export class InlineQueryHandler implements IHandler {
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: IUpdate): Promise<void> {
    console.log(data.message);
    this.methodHandler.sendMessage({
      chat_id: data.message?.from?.id!,
      text: "tewt",
    });
    // console.log(da)
    // this.methodHandler.sendMessage(Number.parseInt(data["from"]["id"]), "что там ищещь");
  }
}
