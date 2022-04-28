import { IParam, Param } from "./param.js";

export interface IMethod {
  readonly name: string;
  readonly params: Array<IParam>;
  get return(): any;

  param(name: string, optional: boolean, defaultValue?:any): IMethod;
  ret(type:any): IMethod;
}

export class Method implements IMethod {
  public readonly name: string;
  public readonly params: Array<IParam>;
  public return: any;

  constructor(name: string){
    this.name = name;
    this.params = new Array<IParam>();
  }

  param(name: string, optional: boolean, defaultValue?: any): IMethod {
    if(this.params.find(x=>x.name == name)){
      throw new Error(`duplicate param: ${name}`);
    }
    this.params.push(new Param(name, optional, defaultValue))
    return this;
  }

  ret(type: any): IMethod {
    this.return = type;
    return this;
  }
}