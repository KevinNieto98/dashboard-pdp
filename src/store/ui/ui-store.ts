import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  isModalOpen: boolean;
  isModalConfirmacion: boolean;
  esVisibleAlerta: boolean;

  mostrarAlerta: (titulo: string, mensaje: string, tipo: string)  => void;
  ocultarAlerta: () => void;

  openSideMenu: () => void;
  closeSideMenu: () => void;

  openModal: () => void;
  closeModal: () => void;

  confirmacion: boolean;

  startConfirmacion: () => void;
  endConfirmacion: () => void;
  openModalConfirmacion: () => void;
  closeModalConfirmacion: () => void;


  alerta: {
    titulo: string;
    mensaje: string;
    tipo: string;
  };
}


export const useUIStore = create<State>()((set) => ({
  isModalConfirmacion: false,
  isSideMenuOpen: false,
  confirmacion: false,
  esVisibleAlerta: false,
  isModalOpen: false,


  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),

  mostrarAlerta: (titulo: string, mensaje: string, tipo: string) => set({
     esVisibleAlerta: true, 
     alerta: { titulo, mensaje, tipo } 
  }),
  ocultarAlerta: () => set({ esVisibleAlerta: false }),

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  startConfirmacion: () => set({ isModalOpen: true }),
  endConfirmacion: () => set({ isModalOpen: false }),

  openModalConfirmacion: () => set({ isModalConfirmacion: true }),
  closeModalConfirmacion: () => set({ isModalConfirmacion: false }),

  alerta: {
    titulo: '',
    mensaje: '',
    tipo: 'danger',
  },
}));