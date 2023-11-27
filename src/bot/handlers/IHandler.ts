import { MethodHandler } from "../methods/MethodsHandler";

export interface IHandler {
  methodHandler: MethodHandler;

  init(methodHandler: MethodHandler): void;
  action(data: any): void;
}
