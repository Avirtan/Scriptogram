export class UserDataRequest {
  private _idUser: number;
  private _msg: string;

  public get IdUser(): number {
    return this._idUser;
  }

  public get Msg(): string {
    return this._msg;
  }

  public constructor(id: number, msg: string) {
    this._idUser = id;
    this._msg = msg;
  }
}
