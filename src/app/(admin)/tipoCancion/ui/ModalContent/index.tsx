'use client'

import { Header } from "@/components";
import {   Input,  Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTiposCancionStore } from "../../store";// Adjust the import path as necessary

interface TipoCancion {
    id: number;
    name: string;
  }
export const ContenidoModal = () => {


  const { 
    selectedTipoCancion, 
    updateSelectedTipoCancion, 
    esEdicion ,
    TiposCancion
  } = useTiposCancionStore((state) => ({
    selectedTipoCancion: state.selectedTipoCancion,
    updateSelectedTipoCancion: state.updateSelectedTipoCancion,
    esEdicion: state.esEdicion,
    TiposCancion: state.tiposCancion,


  }));


  const { id, name, activo } = selectedTipoCancion;

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
      updateSelectedTipoCancion({ ...selectedTipoCancion, name: e.target.value });


  };

  const handleSwitchChange = (value: boolean) => {
      setIsSelected(value);
      updateSelectedTipoCancion({ ...selectedTipoCancion, activo: value });
  };

  


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de TipoCancion'} />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID de la TipoCancion: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la TipoCancion"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />


      </div>
    </div>
  );
};