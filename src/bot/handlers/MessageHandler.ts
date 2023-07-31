import { MethodHandler } from "../methods/MethodsHandler";
import { TypeUpdate } from "../utils/Enum";
import { IHandler } from "./IHandler";

export class MessageHandler implements IHandler {
  typeMask: number;
  methodHandler: MethodHandler;

  constructor() {
    this.typeMask = TypeUpdate.Message;
  }

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  action(data: any): void {
    console.log(data);
  }
}
