import axios from "axios";

export class RequestHandler {
  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public async getMethod(method: string, data: any = {}): Promise<any> {
    try {
      let response = await axios.get(`${this._baseUrl}${method}`, {
        data,
      });
      return response.data;
    } catch (err) {
      console.log("error request " + err);
      return null;
    }
  }
}
