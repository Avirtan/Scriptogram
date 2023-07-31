import axios from "axios";

export class MethodHandler {
  private _token: string;
  private _baseUrl: string;
  constructor(token: string) {
    this._token = token;
    this._baseUrl = `https://api.telegram.org/bot${this._token}/`;
  }

  public async getMe(): Promise<any> {
    let response = await axios.get(`${this._baseUrl}getMe`);
    return response.data;
  }

  public async sendMessage(chat_id: number, text: string): Promise<any> {
    let response = await axios.get(`${this._baseUrl}sendMessage`, {
      data: {
        chat_id,
        text,
      },
    });
    return response.data;
  }
}
