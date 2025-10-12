import axios from "axios";
import { IResponeMethod } from "../methods/IResonseMethod";
export class RequestHandler {
  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public async getMethod(method: string, data: any = {}): Promise<IResponeMethod> {
    try {
      let response = await axios.get(`${this._baseUrl}${method}`, {
        data,
      });
      return response.data as IResponeMethod;
    } catch (err) {
      console.log("error request " + err);
      return {
        ok: false,
        result: err,
      };
    }
  }
}
