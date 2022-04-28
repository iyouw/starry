export interface IEvent {
  readonly name: string;
}

export class Event implements IEvent {
  public readonly name: string;

  constructor(name: string){
    this.name = name;
  }
}