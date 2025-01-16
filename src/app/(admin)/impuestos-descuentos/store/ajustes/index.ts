import { create } from 'zustand';

const data = [
  {
    id: 1,
    name: "Impuesto Sobre Venta(15%)",
    tipo_Ajuste: "impuesto",
    monto: 0.15,
    activo: true
  },
  {
    id: 2,
    name: "Descuento Black Friday(50%)",
    tipo_Ajuste: "descuento",
    monto: 0.50,
    activo: false
  },


];

interface State {
  ajustes: any[];
  selectedAjuste: any;
  esEdicion: boolean;
  selectAjuste: (id: number | string) => void;
  deleteAjuste: (id: number | string) => void;
  addAjuste: (ajuste: any) => void;
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
    tipo_Ajuste: "",
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
  addAjuste: (ajuste) => set((state) => ({
    ajustes: [...state.ajustes, ajuste],
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