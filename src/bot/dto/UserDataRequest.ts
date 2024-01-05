export class UserDataRequest {
  private _idUser: string;
  private _msg: string;

  public get IdUser(): string {
    return this._idUser;
  }

  public get Msg(): string {
    return this._msg;
  }

  public constructor(id: number | string, msg: string) {
    this._idUser = `${id}`;
    this._msg = msg;
  }
}
