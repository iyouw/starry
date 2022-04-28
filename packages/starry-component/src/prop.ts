export interface IProp {
  readonly name: string;
  default?: any;
  type?: any;

  def(defaultValue: any): IProp;
  tye(type: any): IProp;
}

export class Prop implements IProp {
  public readonly name: string;
  public default?: any;
  public type?: any;

  constructor(name: string) {
    this.name = name;
  }

  public def(defaultValue: any): IProp {
    this.default = defaultValue;
    return this;
  }

  public tye(type: any): IProp {
    this.type = type;
    return this;
  }
}