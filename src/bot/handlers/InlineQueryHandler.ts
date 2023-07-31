import axios from "axios";
import { TypeUpdate } from "../utils/Enum";
import { IHandler } from "./IHandler";
import { MethodHandler } from "../methods/MethodsHandler";

export class InlineQueryHandler implements IHandler {
  typeMask: number;
  methodHandler: MethodHandler;

  constructor() {
    this.typeMask = TypeUpdate.InlineQuery;
  }

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: any): Promise<void> {
    this.methodHandler.sendMessage(Number.parseInt(data["from"]["id"]), "что там ищещь");
  }
}
