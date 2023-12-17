import axios from "axios";
import { IHandler } from "./handlers/IHandler";
import { MethodHandler } from "./methods/MethodsHandler";
import { RequestHandler } from "./utils/RequestHandler";
import { IRespone, IUpdate } from "./types";

export class TBot {
  private _id_update: number;
  private _token: string;
  private _handlers: Array<IHandler>;
  private _funcHandler: Map<string, Function>;
  private _methodHandler: MethodHandler;
  private _requestHandler: RequestHandler;
  private _baseUrl: string;

  constructor(token: string) {
    this._id_update = 0;
    this._token = token;
    this._handlers = [];
    this._funcHandler = new Map<string, (update: IUpdate) => {}>();
    this._baseUrl = `https://api.telegram.org/bot${this._token}/`;
    this._requestHandler = new RequestHandler(this._baseUrl);
    this._methodHandler = new MethodHandler(this._requestHandler);
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
        console.log("error " + e);
      }
    } while (true);
  }

  public SetHandler(handler: IHandler) {
    this._handlers.push(handler);
  }

  public On(msg: string, func: (update: IUpdate) => void) {
    this._funcHandler.set(msg, func);
  }

  public async StartUpdate() {
    this.initHandlers();
    for await (const response of this) {
      for (const update of response.result) {
        if (update.message != null) {
          if (this._funcHandler.has(update.message.text!)) {
            let func = this._funcHandler.get(update.message.text!);
            func!(update);
          }
        }
        for (const handler of this._handlers) {
          handler.action(update);
        }
      }
    }
  }
}
