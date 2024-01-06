import { UserDataRequest } from "../..";
import { IHandler } from "../../bot/handlers/IHandler";
import { MethodHandler } from "../../bot/methods/MethodsHandler";
import { IState } from "../../bot/state/IState";
import { IUpdate } from "../../bot/types";
import { State } from "../state";

export class MessageHandler implements IHandler {
  methodHandler: MethodHandler;
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  init(methodHandler: MethodHandler) {
    this.methodHandler = methodHandler;
  }

  async action(data: IUpdate, userDataRequest?: UserDataRequest, stateData?: any): Promise<void> {
    await this.methodHandler.sendMessage({
      chat_id: userDataRequest?.IdUser!,
      text: "textFromMessageHandler",
    });
    console.log(stateData);
    if (stateData == null) {
      console.log(this.state);
      this.state.set({ id: userDataRequest?.IdUser!, cmd: "fwef", step: 0 });
    }
  }
}
