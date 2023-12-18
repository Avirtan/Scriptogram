import { MethodHandler } from "../methods/MethodsHandler";
import { IUpdate } from "../types";

export interface IHandler {
  methodHandler: MethodHandler;

  init(methodHandler: MethodHandler): void;
  action(data: IUpdate): void;
}
