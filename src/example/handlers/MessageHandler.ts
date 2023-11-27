import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";

export class MessageHandler implements IHandler {
  typeMask: number;
  methodHandler: MethodHandler;

  constructor() {}

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  action(data: any): void {
    // console.log(data);
  }
}
