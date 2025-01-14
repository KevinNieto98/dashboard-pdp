import { create } from "zustand";
import { Ciudad } from "../../interfaces";

const data = [
    {
      id: 1,
      name: "Tegucigalpa",
      activo: true ,
      colonias: [
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
      ]
    },
    {
        id: 2,
        name: "San Pedro Sula",
        activo: true ,
        colonias: [
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
        ]
      },
      {
        id: 3,
        name: "La Ceiba",
        activo: true ,
        colonias: [
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
        ]
      }
  ];

  interface State {
    ciudades: any[];
    selectedCiudad: any;
    esEdicion: boolean,
    selectCiudad: (id: number | string) => void;
    selectTipo: (tipo:  string) => void;
    siEsEdicion: () => void;
    noEsEdicion: () => void;
    tipo: string;
    values: Set<string>;
    setValues: (values: Set<string>) => void;
    setValuesEnEdicion: (values: Set<string>) => void;
    getCiudades: (ciudades: any[]) => void;

    updateCiudad: (id: number, newCiudad: Ciudad) => void;
    updateSelectedCiudad: (updatedCiudad: any) => void;

  }
  
  export const useCiudadesStore = create<State>((set) => ({
    ciudades: data,
    tipo: 'Ciudad',
    selectTipo: (tipo) => set({ tipo: tipo }),
    
    selectedCiudad:   {
        id: null,
        name: "",
        activo: false,
        colonias: []
      },
      esEdicion: false,
      selectCiudad: (id) => set((state) => ({
        selectedCiudad: state.ciudades.find((sub) => sub.id === id) || null
      })),
      

      siEsEdicion: () => set({ esEdicion: true }),
      noEsEdicion: () => set({ esEdicion: false }),
      values: new Set<string>(),
      setValues: (values) => set({ values }),
      setValuesEnEdicion: (values) => set({ values:values }),
      getCiudades: (ciudades) => set({ ciudades }),
    
      updateCiudad: (id, newCiudad) => set((state) => ({
        ciudades: state.ciudades.map((Ciudad) =>
          Ciudad.id === id ? newCiudad : Ciudad
        ),
      })),
      updateSelectedCiudad: (updatedCiudad) => set((state) => ({
        selectedCiudad: updatedCiudad,
      })),
  }));