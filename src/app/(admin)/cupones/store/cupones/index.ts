import { create } from 'zustand';
import { Cupon } from '../../interfaces';

const convertToDate = (dateObj: { year: number; month: number; day: number }): Date => {
  const { year, month, day } = dateObj;
  return new Date(year, month - 1, day); // Restar 1 al mes porque los meses en JavaScript son indexados desde 0
};
const data: Cupon[] = [
  {
    id: 1,
    name: "50% OFF Enero",
    codigo: "descuento50",
    tipo_cupon: "porcentaje",
    fecha_caducidad: "2025-01-20T00:00:00.000Z",
    monto: 0.15,
    activo: true
  },
  {
    id: 2,
    name: "100 Pesitos OFF Febrero",
    codigo: "descuento16",
    tipo_cupon: "dinero",
    fecha_caducidad: "2025-01-20T00:00:00.000Z",
    monto: 0.50,
    activo: false
  }
];

interface State {
  cupones: any[];
  selectedCupon: any;
  esEdicion: boolean;
  selectCupon: (id: number | string) => void;
  deleteCupon: (id: number | string) => void;
  addCupon: (Cupon: any) => void;
  updateCupon: (id: number | string) => void;
  getCupones: (cupones: any[]) => void;
  updateSelectedCupon: (updatedCupones: any) => void;
  siEsEdicion: () => void;
  noEsEdicion: () => void;
}

export const useCuponesStore = create<State>((set) => ({
  cupones: data,
  selectedCupon:     
  {
    id: null,
    name: "",
    fecha_caducidad: "",
    monto: 0,
    activo: false
  },
  esEdicion: false,
  selectCupon: (id) => set((state) => ({
    selectedCupon: state.cupones.find((sub) => sub.id === id) || null
  })),
  deleteCupon: (id) => set((state) => ({
    cupones: state.cupones.filter((sub) => sub.id !== id),
    selectedcupones: state.selectedCupon === id ? '' : state.selectedCupon,
  })),
  addCupon: (Cupon) => set((state) => ({
    cupones: [...state.cupones, Cupon],
  })),
  updateCupon: (id) => set((state) => ({
    cupones: state.cupones.map((sub) =>
      sub.id === id ? state.selectedCupon : sub
    ),
  })),
  getCupones: (cupones) => set({ cupones }),

  updateSelectedCupon: (updatedcupones) => set((state) => ({
    selectedCupon: updatedcupones,
  })),

  siEsEdicion: () => set({ esEdicion: true }),
  noEsEdicion: () => set({ esEdicion: false }),
}));