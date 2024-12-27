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
]
interface State {
  subCategorias: any[];
  selectedSubCategoria: number | string

  selectSubCategoria: (id: number | string) => void;
  deleteSubCategoria: (id: number | string) => void;
  addSubCategoria: (subCategoria: any) => void;
  updateSubCategoria: (id: number | string, subCategoria: any) => void;
  getSubCategorias: (subCategorias: any[]) => void;
}

export const useSubCategoriasStore = create<State>((set) => ({
  subCategorias: data,
  selectedSubCategoria: '',
  selectSubCategoria: (id) => set({ selectedSubCategoria: id }),
  deleteSubCategoria: (id) => set((state) => ({
    subCategorias: state.subCategorias.filter((sub) => sub.id !== id),
    selectedSubCategoria: state.selectedSubCategoria === id ? '' : state.selectedSubCategoria,
  })),
  addSubCategoria: (subCategoria) => set((state) => ({
    subCategorias: [...state.subCategorias, subCategoria],
  })),
  updateSubCategoria: (id, updatedSubCategoria) => set((state) => ({
    subCategorias: state.subCategorias.map((sub) =>
      sub.id === id ? updatedSubCategoria : sub
    ),
  })),
  getSubCategorias: (subCategorias) => set({ subCategorias }),
}));