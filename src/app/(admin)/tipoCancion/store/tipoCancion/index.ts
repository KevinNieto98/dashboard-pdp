import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Adoracion"
  },
  {
    id: 2,
    name: "Alabanza",
  },
  {
    id: 3,
    name: "Entrada"
  },

];

interface State {
  tiposCancion: any[];
  selectedTipoCancion: any;
  esEdicion: boolean;
  selectTipoCancion: (id: number | string) => void;
  getTiposCancion: (tiposCancion: any[]) => void;
  updateTipoCancion: (id: number | string) => void;
  updateSelectedTipoCancion: (updatedTipoCancion: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useTiposCancionStore = create<State>((set) => ({
  tiposCancion: data,
  selectedTipoCancion:   {
    id: null,
    name: "",
  },
  esEdicion: false,
  selectTipoCancion: (id) => set((state) => ({
    selectedTipoCancion: state.tiposCancion.find((sub) => sub.id === id) || null
  })),

  updateTipoCancion: (id) => set((state) => ({
    tiposCancion: state.tiposCancion.map((sub) =>
      sub.id === id ? state.selectedTipoCancion : sub
    ),
  })),
  getTiposCancion: (tiposCancion) => set({ tiposCancion }),

  updateSelectedTipoCancion: (updatedTipoCancion) => set((state) => ({
    selectedTipoCancion: updatedTipoCancion,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));