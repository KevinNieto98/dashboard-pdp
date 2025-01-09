import { SubCategoria } from ".";

export interface Categoria {
    id: number;
    name: string;
    activo: boolean;
    subCategorias: SubCategoria[];
  }
