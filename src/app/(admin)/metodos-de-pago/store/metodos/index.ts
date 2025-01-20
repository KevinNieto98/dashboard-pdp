import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Efectivo",
    activo: true
  },
  {
    id: 2,
    name: "Transferencia",
    activo: false
  },
  {
    id: 3,
    name: "Tarjeta de Debito o Credito",
    activo: true
  },

];

interface State {
  metodos: any[];
  selectedMetodo: any;
  esEdicion: boolean;
  selectMetodo: (id: number | string) => void;
  deleteMetodo: (id: number | string) => void;
  addMetodo: (Metodo: any) => void;
  updateMetodo: (id: number | string) => void;
  getmetodos: (metodos: any[]) => void;
  updateSelectedMetodo: (updatedMetodo: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useMetodosStore = create<State>((set) => ({
  metodos: data,
  selectedMetodo:   {
    id: null,
    name: "",
    activo: false
  },
  esEdicion: false,
  selectMetodo: (id) => set((state) => ({
    selectedMetodo: state.metodos.find((sub) => sub.id === id) || null
  })),
  deleteMetodo: (id) => set((state) => ({
    metodos: state.metodos.filter((sub) => sub.id !== id),
    selectedMetodo: state.selectedMetodo === id ? '' : state.selectedMetodo,
  })),
  addMetodo: (Metodo) => set((state) => ({
    metodos: [...state.metodos, Metodo],
  })),
  updateMetodo: (id) => set((state) => ({
    metodos: state.metodos.map((sub) =>
      sub.id === id ? state.selectedMetodo : sub
    ),
  })),
  getmetodos: (metodos) => set({ metodos }),

  updateSelectedMetodo: (updatedMetodo) => set((state) => ({
    selectedMetodo: updatedMetodo,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));