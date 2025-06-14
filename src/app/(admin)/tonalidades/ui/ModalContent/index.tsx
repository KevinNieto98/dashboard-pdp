'use client'

import { Header } from "@/components";
import {   Input,  Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTonalidadesStore } from "../../store";// Adjust the import path as necessary

interface Tonalidad {
    id: number;
    name: string;
    activo: boolean;
  }
export const ContenidoModal = () => {


  const { 
    selectedTonalidad, 
    updateSelectedTonalidad, 
    esEdicion ,
    tonalidades
  } = useTonalidadesStore((state) => ({
    selectedTonalidad: state.selectedTonalidad,
    updateSelectedTonalidad: state.updateSelectedTonalidad,
    esEdicion: state.esEdicion,
    tonalidades: state.tonalidades,


  }));


  const { id, name, activo } = selectedTonalidad;

  const [localName, setLocalName] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (esEdicion) {
      setLocalName(name);
      setIsSelected(activo);
    }
  }, [esEdicion, name, activo]);

  useEffect(() => {
    if (!esEdicion) {
      setLocalName('');
      setIsSelected(false);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalName(e.target.value);
      updateSelectedTonalidad({ ...selectedTonalidad, name: e.target.value });


  };

  const handleSwitchChange = (value: boolean) => {
      setIsSelected(value);
      updateSelectedTonalidad({ ...selectedTonalidad, activo: value });
  };

  


  const activeTonalidades = tonalidades.filter((Tonalidad: Tonalidad) => Tonalidad.activo);


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Tonalidad'} />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID de la Tonalidad: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la Tonalidad"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />
        <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
          Activa
        </Switch>
        

      </div>
    </div>
  );
};