import { MethodHandler } from "../methods/MethodsHandler";

export interface IHandler {
  typeMask: number;
  methodHandler: MethodHandler;

  init(methodHandler: MethodHandler);
  action(data: any): void;
}
