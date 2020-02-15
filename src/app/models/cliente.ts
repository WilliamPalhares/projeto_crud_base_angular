import { Pais } from "./pais";

export class Cliente {

  public constructor(init?: Partial<Cliente>) {
    Object.assign(this, init);
  }

  id: number;
  nome: string;
  paisId: number;
  pais: Pais;
}
