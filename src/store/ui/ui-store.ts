import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  isModalOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

  openModal: () => void;
  closeModal: () => void;

}


export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),

  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));