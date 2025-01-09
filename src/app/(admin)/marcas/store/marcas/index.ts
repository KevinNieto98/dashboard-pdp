import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Samsung",
    activo: true
  },
  {
    id: 2,
    name: "Iphone",
    activo: false
  },
  {
    id: 3,
    name: "Xiomi",
    activo: true
  },

];

interface State {
  marcas: any[];
  selectedMarca: any;
  esEdicion: boolean;
  selectMarca: (id: number | string) => void;
  deleteMarca: (id: number | string) => void;
  addMarca: (Marca: any) => void;
  updateMarca: (id: number | string) => void;
  getMarcas: (marcas: any[]) => void;
  updateSelectedMarca: (updatedMarca: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useMarcasStore = create<State>((set) => ({
  marcas: data,
  selectedMarca:   {
    id: null,
    name: "",
    activo: false
  },
  esEdicion: false,
  selectMarca: (id) => set((state) => ({
    selectedMarca: state.marcas.find((sub) => sub.id === id) || null
  })),
  deleteMarca: (id) => set((state) => ({
    marcas: state.marcas.filter((sub) => sub.id !== id),
    selectedMarca: state.selectedMarca === id ? '' : state.selectedMarca,
  })),
  addMarca: (Marca) => set((state) => ({
    marcas: [...state.marcas, Marca],
  })),
  updateMarca: (id) => set((state) => ({
    marcas: state.marcas.map((sub) =>
      sub.id === id ? state.selectedMarca : sub
    ),
  })),
  getMarcas: (marcas) => set({ marcas }),

  updateSelectedMarca: (updatedMarca) => set((state) => ({
    selectedMarca: updatedMarca,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));