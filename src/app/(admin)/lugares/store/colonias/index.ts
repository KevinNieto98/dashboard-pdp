import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Residencial San Ignacio",
    activo: true
  },
  {
    id: 2,
    name: "3 de Mayo",
    activo: false
  },
  {
    id: 3,
    name: "El Sauce",
    activo: true
  },
  {
    id: 4,
    name: "Residencial Honduras",
    activo: false
  },
  {
    id: 5,
    name: "Rivera Hernandez",
    activo: false
  },
  {
    id: 6,
    name: "El Merendon",
    activo: true
  },
  {
    id: 7,
    name: "Villa Nueva",
    activo: false
  },
  {
    id: 8,
    name: "La Isla",
    activo: false
  },
  {
    id: 9,
    name: "La Granja",
    activo: true
  },
  {
    id: 10,
    name: "La Perla",
    activo: false
  },
];

interface State {
  colonias: any[];
  selectedColonia: any;
  esEdicion: boolean;
  selectColonia: (id: number | string) => void;
  deleteColonia: (id: number | string) => void;
  addColonia: (Colonia: any) => void;
  updateColonia: (id: number | string) => void;
  getColonias: (colonias: any[]) => void;
  updateSelectedColonia: (updatedColonia: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useColoniasStore = create<State>((set) => ({
  colonias: data,
  selectedColonia:   {
    id: null,
    name: "",
    activo: false
  },
  esEdicion: false,
  selectColonia: (id) => set((state) => ({
    selectedColonia: state.colonias.find((sub) => sub.id === id) || null
  })),
  deleteColonia: (id) => set((state) => ({
    colonias: state.colonias.filter((sub) => sub.id !== id),
    selectedColonia: state.selectedColonia === id ? '' : state.selectedColonia,
  })),
  addColonia: (Colonia) => set((state) => ({
    colonias: [...state.colonias, Colonia],
  })),
  updateColonia: (id) => set((state) => ({
    colonias: state.colonias.map((sub) =>
      sub.id === id ? state.selectedColonia : sub
    ),
  })),
  getColonias: (colonias) => set({ colonias }),
  updateSelectedColonia: (updatedColonia) => set((state) => ({
    selectedColonia: updatedColonia,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));