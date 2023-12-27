import { UserDataRequest } from "../..";
import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IUpdate } from "../../bot/types";

export class MessageHandler implements IHandler {
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: IUpdate, userDataRequest?: UserDataRequest): Promise<void> {
    await this.methodHandler.sendMessage({
      chat_id: userDataRequest?.IdUser!,
      text: "textFromMessageHandler",
    });
  }
}
