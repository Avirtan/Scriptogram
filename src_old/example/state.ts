export class State {
  private data: StateData[] = [];

  public set(dataObj: { id: string; cmd: string; step: number; idMsg?: number }) {
    const id = dataObj.id;
    const cmd = dataObj.cmd;
    const step = dataObj.step;
    const idMsg = dataObj.idMsg;
    const data = this.data.find((v) => v.id == id);

    if (data) {
      data.command = cmd;
      data.step = step;
      data.idMsg = idMsg;
      return;
    }

    this.data.push({
      id: id,
      command: cmd,
      step: step,
      idMsg: idMsg,
    });
  }

  public get(id: string): StateData | undefined {
    const data = this.data.find((v) => v.id == id);
    if (data) {
      return data;
    }
  }

  public reset(id: string) {
    const data = this.data.find((v) => v.id == id);
    if (data == undefined) return;
    data.command = "";
    data.step = 0;
  }
}

export interface StateData {
  id: string;
  command: string;
  step: any;
  idMsg: number | undefined;
}
