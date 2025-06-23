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
  essentials: any[];
  selectedEssential: any;
  esEdicion: boolean;
  selectEssential: (id: number | string) => void;
  getEssentials: (essentials: any[]) => void;
  updateEssential: (id: number | string) => void;
  updateSelectedEssential: (updatedEssential: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useEssentialsStore = create<State>((set) => ({
  essentials: data,
  selectedEssential:   {
    id: null,
    name: "",
  },
  esEdicion: false,
  selectEssential: (id) => set((state) => ({
    selectedEssential: state.essentials.find((sub) => sub.id === id) || null
  })),

  updateEssential: (id) => set((state) => ({
    essentials: state.essentials.map((sub) =>
      sub.id === id ? state.selectedEssential : sub
    ),
  })),
  getEssentials: (essentials) => set({ essentials }),

  updateSelectedEssential: (updatedEssential) => set((state) => ({
    selectedEssential: updatedEssential,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));