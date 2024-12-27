import { create } from 'zustand';
import { Selection } from '@nextui-org/react';

interface State {
  itemsSelected: Set<string>;
  selectionItem: (keys: Selection) => void;
  limpiarItems: () => void;
}

export const useUITableStore = create<State>((set) => ({
  itemsSelected: new Set(),
  selectionItem: (keys: Selection) => set((state) => {
    const newItemsSelected = new Set(state.itemsSelected);
    if (keys === "all") {
      // Manejar el caso en que se seleccionan todos los elementos
      // Aquí puedes agregar lógica para manejar la selección de todos los elementos
    } else {
      keys.forEach((key) => {
        if (typeof key === 'string') {
          newItemsSelected.add(key);
        }
      });
    }
    return { itemsSelected: newItemsSelected };
  }),
  limpiarItems: () => set({ itemsSelected: new Set() }),
}));