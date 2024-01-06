export class UserDataRequest {
  private _idUser: string;
  private _msg: string;
  private _callbackQueryData: string | undefined;

  public get IdUser(): string {
    return this._idUser;
  }

  public get Msg(): string {
    return this._msg;
  }

  public get CallbackQueryData(): string | undefined {
    return this._callbackQueryData;
  }

  public constructor(id: number | string, msg: string, callbackQueryData?: string) {
    this._idUser = `${id}`;
    this._msg = msg;
    this._callbackQueryData = callbackQueryData;
  }
}
