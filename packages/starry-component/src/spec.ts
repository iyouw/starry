import { IEvent, Event } from "./event.js";
import { IMethod, Method } from "./method.js";
import { IProp, Prop } from "./prop.js";

export interface ISpec {
  readonly name: string;
  readonly props: Array<IProp>;
  readonly events: Array<IEvent>;
  readonly methods: Array<IMethod>;

  prop(name: string, type?: any, defaultValue?: any): IProp;
  event(name: string): IEvent;
  method(name: string): IMethod;

  as<T>(): T;
  toJson(): string;
}

export class Spec implements ISpec {

  public static declare(name: string): ISpec {
    return new Spec(name);
  }

  public readonly name: string;
  public readonly props: Array<IProp>;
  public readonly events: Array<IEvent>;
  public readonly methods: Array<IMethod>;

  constructor(name: string) {
    this.name = name;
    this.props = new Array<IProp>();
    this.events = new Array<IEvent>();
    this.methods = new Array<IMethod>();
  }

  public prop(name: string, defaultValue?: any, type?: any): IProp {
    if(this.isDupliacateMember(name)){
      throw new Error(`duplicate member: ${name}`);
    }
    const prop = new Prop(name, defaultValue, type);
    this.props.push(prop);
    return prop;
  }

  public event(name: string): IEvent {
    if(this.events.find(x=>x.name == name)){
      throw new Error(`duplicate event: ${name}`);
    }
    const event = new Event(name);
    this.events.push(event);
    return event;
  }

  public method(name: string): IMethod {
    if(this.isDupliacateMember(name)){
      throw new Error(`duplicate member: ${name}`);
    }
    const method = new Method(name);
    this.methods.push(method);
    return method;
  }

  public as<T>(): T {
    return (this as unknown) as T;
  }

  public toJson(): string {
    return JSON.stringify(this)
  }

  private isDupliacateMember(name: string) : boolean {
    const isDuplicateProp = !!this.props.find(x=>x.name == name);
    const isDuplicateMethod = !!this.methods.find(x=>x.name == name);
    return isDuplicateProp || isDuplicateMethod;
  }
}