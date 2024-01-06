export interface IState {
  get(id: string): any;
  set(data: object): void;
}
