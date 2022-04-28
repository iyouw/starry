export interface IParam {
  readonly name: string;
  optional: boolean;
  default?: any;
}

export class Param implements IParam {
  public readonly name: string;
  public readonly optional: boolean;
  public readonly default: any;

  constructor(name: string, optional: boolean = false, defaultValue?: any) {
    this.name = name;
    this.optional = optional;
    this.default = defaultValue;
  }
}