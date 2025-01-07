import { create } from "zustand";

const data = [
    {
      id: 1,
      name: "Juegos",
      activo: true ,
      subCategorias: [
        {
            id: 2,
            name: "Manualidades",
            activo: false
          },
          {
            id: 3,
            name: "Rompecabezas",
            activo: true
          },
          {
            id: 4,
            name: "Juegos de Meza",
            activo: false
          },
      ]
    },
    {
        id: 1,
        name: "Hogar",
        activo: true ,
        subCategorias: [
          {
              id: 2,
              name: "Electrodomesticos",
              activo: false
            },
            {
              id: 3,
              name: "Dormitorios",
              activo: true
            },
            {
              id: 4,
              name: "Exteriores",
              activo: false
            },
        ]
      },
      {
        id: 1,
        name: "Tecnologia",
        activo: true ,
        subCategorias: [
          {
              id: 2,
              name: "Celulares",
              activo: false
            },
            {
              id: 3,
              name: "Cables",
              activo: true
            },
            {
              id: 4,
              name: "Accesorios",
              activo: false
            },
        ]
      }
  ];

  interface State {
    categorias: any[];
  }
  
  export const useCategoriasStore = create<State>((set) => ({
    categorias: data,
  }));