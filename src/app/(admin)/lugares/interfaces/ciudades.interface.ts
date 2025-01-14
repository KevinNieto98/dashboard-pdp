import { Colonia } from "./colonias.interface";

export interface Ciudad {
    id: number;
    name: string;
    activo: boolean;
    colonias: Colonia[];
  }
