import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IUpdate } from "../../bot/types";

export class MessageHandler implements IHandler {
  typeMask: number;
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: IUpdate): Promise<void> {
    var msg = await this.methodHandler.sendMessage({
      chat_id: data.message?.from?.id!,
      text: "tewt",
    });
  }
}
