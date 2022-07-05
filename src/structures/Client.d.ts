import { Fumo } from "../types/fumo";

export default class Client {
  constructor(options: ClientOptions);

  public random(): Promise<Fumo>
  public specific(id: string): Promise<Fumo>
}
export interface ClientOptions {
  endpoint?: string;
}
