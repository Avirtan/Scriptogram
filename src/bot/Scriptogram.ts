import axios from "axios";
import { IHandler } from "./handlers/IHandler";
import { MethodHandler } from "./methods/MethodsHandler";
import { RequestHandler } from "./utils/RequestHandler";
import { IRespone, IUpdate } from "./types";
import { UserDataRequest } from ".";
import { IState } from "./state/IState";

export class Scriptogram {
  private _id_update: number;
  private _token: string;
  private _handlers: Array<IHandler>;
  private _handlersUpdate: Array<Function>;
  private _middlewares: Array<Function>;
  private _funcHandler: Map<string, Function>;
  private _methodHandler: MethodHandler;
  private _requestHandler: RequestHandler;
  private _baseUrl: string;
  private _state: IState;

  public get MethodHandler(): MethodHandler {
    return this._methodHandler;
  }

  constructor(token: string) {
    this._id_update = 0;
    this._token = token;
    this._handlers = [];
    this._handlersUpdate = [];
    this._middlewares = [];
    this._funcHandler = new Map<string, (update: IUpdate, stateData?: any, dataRequestUser?: UserDataRequest) => {}>();
    this._baseUrl = `https://api.telegram.org/bot${this._token}/`;
    this._requestHandler = new RequestHandler(this._baseUrl);
    this._methodHandler = new MethodHandler(this._requestHandler);
  }

  public setState(state: IState) {
    this._state = state;
  }

  private initHandlers() {
    for (const handler of this._handlers) {
      handler.init(this._methodHandler);
    }
  }

  public async *[Symbol.asyncIterator]() {
    do {
      try {
        var response = await axios.get(`https://api.telegram.org/bot${this._token}/getUpdates`, {
          data: {
            offset: this._id_update,
            timeout: 50,
          },
        });
        const responeData: IRespone = response.data as IRespone;
        if (responeData.result.length == 0) {
          continue;
        }
        this._id_update = responeData.result[responeData.result.length - 1].update_id + 1;
        yield responeData;
      } catch (e) {
        // console.log("error " + e);
      }
    } while (true);
  }

  public SetHandler(handler: IHandler) {
    this._handlers.push(handler);
  }

  public OnUpdate(func: (update: IUpdate, dataRequestUser?: UserDataRequest, stateData?: any) => void) {
    this._handlersUpdate.push(func);
  }

  public OnCommand(msg: string, func: (update: IUpdate, dataRequestUser?: UserDataRequest) => void) {
    this._funcHandler.set(msg, func);
  }

  public use(func: (update: IUpdate, dataRequestUser?: UserDataRequest, stateData?: any) => Promise<boolean>) {
    this._middlewares.push(func);
  }

  public async StartUpdate() {
    this.initHandlers();
    var userDataRequest = new UserDataRequest(0, "");
    var isBreak = false;
    for await (const response of this) {
      isBreak = false;
      for (const update of response.result) {
        userDataRequest = this.GetUserDataRequestFromUpdate(update);
        var stateData = null;

        if (this._state != null) {
          stateData = this._state.get(userDataRequest.IdUser);
        }
        for (const middleware of this._middlewares) {
          let resultMiddleware = await middleware(update, userDataRequest, stateData);
          if (!resultMiddleware) {
            isBreak = true;
            break;
          }
        }
        if (isBreak) {
          continue;
        }
        if (update.message != null) {
          if (this._funcHandler.has(update.message.text!)) {
            let func = this._funcHandler.get(update.message.text!);
            func!(update, userDataRequest, stateData);
          }
        }
        for (const handler of this._handlersUpdate) {
          handler(update, userDataRequest, stateData);
        }
        for (const handler of this._handlers) {
          handler.action(update, userDataRequest, stateData);
        }
      }
    }
  }

  public GetUserDataRequestFromUpdate(update: IUpdate): UserDataRequest {
    if (update.message != null && update.message.from != null) {
      return new UserDataRequest(update.message.from.id, update.message.text ?? "");
    } else if (update.edited_message != null && update.edited_message.from != null) {
      return new UserDataRequest(update.edited_message.from.id, update.edited_message.text ?? "");
    } else if (update.channel_post != null && update.channel_post.from != null) {
      return new UserDataRequest(update.channel_post.from.id, update.channel_post.text ?? "");
    } else if (update.edited_channel_post != null && update.edited_channel_post.from != null) {
      return new UserDataRequest(update.edited_channel_post.from.id, update.edited_channel_post.text ?? "");
    } else if (update.inline_query != null && update.inline_query.from != null) {
      return new UserDataRequest(update.inline_query.from.id, update.inline_query.query ?? "");
    } else if (update.chosen_inline_result != null && update.chosen_inline_result.from != null) {
      return new UserDataRequest(update.chosen_inline_result.from.id, update.chosen_inline_result.query ?? "");
    } else if (update.callback_query != null && update.callback_query.from != null) {
      return new UserDataRequest(
        update.callback_query.from.id,
        update.callback_query.message?.text ?? "",
        update.callback_query.data
      );
    } else if (update.shipping_query != null && update.shipping_query.from != null) {
      return new UserDataRequest(update.shipping_query.from.id, "");
    } else if (update.pre_checkout_query != null && update.pre_checkout_query.from != null) {
      return new UserDataRequest(update.pre_checkout_query.from.id, "");
    } else if (update.poll_answer != null && update.poll_answer.user != null) {
      return new UserDataRequest(update.poll_answer.user.id, update.poll_answer.poll_id);
    } else if (update.my_chat_member != null && update.my_chat_member.from != null) {
      return new UserDataRequest(update.my_chat_member.from.id, "");
    } else if (update.chat_member != null && update.chat_member.from != null) {
      return new UserDataRequest(update.chat_member.from.id, "");
    } else if (update.chat_join_request != null && update.chat_join_request.from != null) {
      return new UserDataRequest(update.chat_join_request.from.id, "");
    }
    return new UserDataRequest(-1, "");
  }
}
