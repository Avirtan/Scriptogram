import { RequestHandler } from "../utils/RequestHandler";
import { ISendMessage } from "./Types/ISendMessage";

export class MethodHandler {
  private _requestHandler: RequestHandler;
  constructor(requestHandler: RequestHandler) {
    this._requestHandler = requestHandler;
  }

  public async getMe(): Promise<any> {
    let data = await this._requestHandler.getMethod("getMe");
    return data;
  }

  public async sendMessage(requestData: ISendMessage): Promise<any> {
    console.log(requestData);
    let data = await this._requestHandler.getMethod("sendMessage", requestData);
    return data;
  }
}
