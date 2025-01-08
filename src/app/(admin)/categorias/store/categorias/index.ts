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
        id: 2,
        name: "Hogar",
        activo: true ,
        subCategorias: [
          {
              id: 5,
              name: "Electrodomesticos",
              activo: false
            },
            {
              id: 6,
              name: "Dormitorios",
              activo: true
            },
            {
              id: 7,
              name: "Exteriores",
              activo: false
            },
        ]
      },
      {
        id: 3,
        name: "Tecnologia",
        activo: true ,
        subCategorias: [
          {
              id: 8,
              name: "Celulares",
              activo: false
            },
            {
              id: 9,
              name: "Cables",
              activo: true
            },
            {
              id: 10,
              name: "Accesorios",
              activo: false
            },
        ]
      }
  ];

  interface State {
    categorias: any[];
    selectedCategoria: any;
    esEdicion: boolean,
    selectCategoria: (id: number | string) => void;
    selectTipo: (tipo:  string) => void;
    siEsEdicion: () => void;
    noEsEdicion: () => void;
    tipo: string;
    values: Set<string>;
    setValues: (values: Set<string>) => void;
    setValuesEnEdicion: (values: Set<string>) => void;

  }
  
  export const useCategoriasStore = create<State>((set) => ({
    categorias: data,
    tipo: 'categoria',
    selectTipo: (tipo) => set({ tipo: tipo }),
    
    selectedCategoria:   {
        id: null,
        name: "",
        activo: false,
        subCategorias: []
      },
      esEdicion: false,
      selectCategoria: (id) => set((state) => ({
        selectedCategoria: state.categorias.find((sub) => sub.id === id) || null
      })),
      

      siEsEdicion: () => set({ esEdicion: true }),
      noEsEdicion: () => set({ esEdicion: false }),
      values: new Set<string>(),
      setValues: (values) => set({ values }),
      setValuesEnEdicion: (values) => set({ values:values }),
    

  }));