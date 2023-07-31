import axios from "axios";
import { IRespone } from "./types/IResponse";
import { IHandler } from "./handlers/IHandler";
import { TypeUpdate } from "./utils/Enum";
import { MethodHandler } from "./methods/MethodsHandler";

export class TBot {
  private _id_update: number;
  private _token: string;
  private _handlers: Array<IHandler>;
  private _methodHandler: MethodHandler;

  constructor(token: string) {
    this._id_update = 0;
    this._token = token;
    this._handlers = [];
    this._methodHandler = new MethodHandler(token);
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
        const responseJson = JSON.stringify(response.data);
        const responeData: IRespone = JSON.parse(responseJson);
        if (responeData.result.length == 0) {
          continue;
        }
        this._id_update = responeData.result[0]["update_id"] + 1;
        yield responeData;
      } catch (e) {
        console.log("error " + e);
      }
    } while (true);
  }

  public SetHandler(handler: IHandler) {
    this._handlers.push(handler);
  }

  public async StartUpdate() {
    let typeUpdate: TypeUpdate;
    let data;
    this.initHandlers();
    for await (const response of this) {
      for (const update of response.result) {
        if (update.inline_query != null) {
          data = update.inline_query;
          typeUpdate = TypeUpdate.InlineQuery;
        }
        if (update.message != null) {
          data = update.message;
          typeUpdate = TypeUpdate.Message;
        }
        var filterHandlers = this._handlers.filter((value: IHandler) => {
          console.log(value.typeMask | typeUpdate);
          return value.typeMask | typeUpdate;
        });
        for (const handler of filterHandlers) {
          handler.action(data);
        }
      }
    }
  }
}
