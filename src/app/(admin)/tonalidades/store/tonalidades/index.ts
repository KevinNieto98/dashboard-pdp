import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "C"
  },
  {
    id: 2,
    name: "D",
  },
  {
    id: 3,
    name: "E"
  },

];

interface State {
  tonalidades: any[];
  selectedTonalidad: any;
  esEdicion: boolean;
  selectTonalidad: (id: number | string) => void;
  deleteTonalidad: (id: number | string) => void;
  addTonalidad: (Tonalidad: any) => void;
  updateTonalidad: (id: number | string) => void;
  getTonalidades: (tonalidades: any[]) => void;
  updateSelectedTonalidad: (updatedTonalidad: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useTonalidadesStore = create<State>((set) => ({
  tonalidades: data,
  selectedTonalidad:   {
    id: null,
    name: "",
  },
  esEdicion: false,
  selectTonalidad: (id) => set((state) => ({
    selectedTonalidad: state.tonalidades.find((sub) => sub.id === id) || null
  })),
  deleteTonalidad: (id) => set((state) => ({
    tonalidades: state.tonalidades.filter((sub) => sub.id !== id),
    selectedTonalidad: state.selectedTonalidad === id ? '' : state.selectedTonalidad,
  })),
  addTonalidad: (Tonalidad) => set((state) => ({
    tonalidades: [...state.tonalidades, Tonalidad],
  })),
  updateTonalidad: (id) => set((state) => ({
    tonalidades: state.tonalidades.map((sub) =>
      sub.id === id ? state.selectedTonalidad : sub
    ),
  })),
  getTonalidades: (tonalidades) => set({ tonalidades }),

  updateSelectedTonalidad: (updatedTonalidad) => set((state) => ({
    selectedTonalidad: updatedTonalidad,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));