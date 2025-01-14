import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Impuesto Sobre Venta(15%)",
    tipoAjuste: "impuesto",
    monto: 0.15,
    activo: true
  },
  {
    id: 1,
    name: "Descuento Black Friday(50%)",
    tipoAjuste: "descuento",
    monto: 0.50,
    activo: true
  },


];

interface State {
  ajustes: any[];
  selectedAjuste: any;
  esEdicion: boolean;
  selectAjuste: (id: number | string) => void;
  deleteAjuste: (id: number | string) => void;
  addAjuste: (Ajustes: any) => void;
  updateAjuste: (id: number | string) => void;
  getAjustes: (ajustes: any[]) => void;
  updateSelectedAjuste: (updatedAjustes: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useAjustesStore = create<State>((set) => ({
  ajustes: data,
  selectedAjuste:     
  {
    id: null,
    name: "",
    tipoAjuste: "",
    monto: 0,
    activo: false
  },
  esEdicion: false,
  selectAjuste: (id) => set((state) => ({
    selectedAjuste: state.ajustes.find((sub) => sub.id === id) || null
  })),
  deleteAjuste: (id) => set((state) => ({
    ajustes: state.ajustes.filter((sub) => sub.id !== id),
    selectedAjustes: state.selectedAjuste === id ? '' : state.selectedAjuste,
  })),
  addAjuste: (Ajustes) => set((state) => ({
    ajustes: [...state.ajustes, Ajustes],
  })),
  updateAjuste: (id) => set((state) => ({
    ajustes: state.ajustes.map((sub) =>
      sub.id === id ? state.selectedAjuste : sub
    ),
  })),
  getAjustes: (ajustes) => set({ ajustes }),

  updateSelectedAjuste: (updatedAjustes) => set((state) => ({
    selectedAjuste: updatedAjustes,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));