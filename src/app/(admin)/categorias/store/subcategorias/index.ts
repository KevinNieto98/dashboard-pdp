import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Educativos",
    activo: true
  },
  {
    id: 2,
    name: "Manualidades",
    activo: false
  },
  {
    id: 3,
    name: "Rompecabezas",
    activo: true
  },
  {
    id: 4,
    name: "Juegos de Meza",
    activo: false
  },
  {
    id: 5,
    name: "Electrodomesticos",
    activo: false
  },
  {
    id: 6,
    name: "Dormitorios",
    activo: true
  },
  {
    id: 7,
    name: "Exteriores",
    activo: false
  },
  {
    id: 8,
    name: "Celulares",
    activo: false
  },
  {
    id: 9,
    name: "Cables",
    activo: true
  },
  {
    id: 10,
    name: "Accesorios",
    activo: false
  },
];

interface State {
  subCategorias: any[];
  selectedSubCategoria: any;
  esEdicion: boolean;
  selectSubCategoria: (id: number | string) => void;
  deleteSubCategoria: (id: number | string) => void;
  addSubCategoria: (subCategoria: any) => void;
  updateSubCategoria: (id: number | string) => void;
  getSubCategorias: (subCategorias: any[]) => void;
  getSubcategoryUnique: (id: number | string) => any;
  updateSelectedSubCategoria: (updatedSubCategoria: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useSubCategoriasStore = create<State>((set) => ({
  subCategorias: data,
  selectedSubCategoria:   {
    id: null,
    name: "",
    activo: false
  },
  esEdicion: false,
  selectSubCategoria: (id) => set((state) => ({
    selectedSubCategoria: state.subCategorias.find((sub) => sub.id === id) || null
  })),
  deleteSubCategoria: (id) => set((state) => ({
    subCategorias: state.subCategorias.filter((sub) => sub.id !== id),
    selectedSubCategoria: state.selectedSubCategoria === id ? '' : state.selectedSubCategoria,
  })),
  addSubCategoria: (subCategoria) => set((state) => ({
    subCategorias: [...state.subCategorias, subCategoria],
  })),
  updateSubCategoria: (id) => set((state) => ({
    subCategorias: state.subCategorias.map((sub) =>
      sub.id === id ? state.selectedSubCategoria : sub
    ),
  })),
  getSubCategorias: (subCategorias) => set({ subCategorias }),
  getSubcategoryUnique: (id) => set((state) => 
    state.subCategorias.find((sub) => sub.id === id)
  ),
  updateSelectedSubCategoria: (updatedSubCategoria) => set((state) => ({
    selectedSubCategoria: updatedSubCategoria,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));