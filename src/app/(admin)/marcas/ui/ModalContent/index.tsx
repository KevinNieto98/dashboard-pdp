'use client'

import { Header } from "@/components";
import {  Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useMarcasStore } from "../../store";// Adjust the import path as necessary

interface Marca {
    id: number;
    name: string;
    activo: boolean;
  }
export const ContenidoModal = () => {


  const { 
    selectedMarca, 
    updateSelectedMarca, 
    esEdicion ,
    Marcas
  } = useMarcasStore((state) => ({
    selectedMarca: state.selectedMarca,
    updateSelectedMarca: state.updateSelectedMarca,
    esEdicion: state.esEdicion,
    Marcas: state.marcas,


  }));


  const { id, name, activo } = selectedMarca;

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
      updateSelectedMarca({ ...selectedMarca, name: e.target.value });


  };

  const handleSwitchChange = (value: boolean) => {
      setIsSelected(value);
      updateSelectedMarca({ ...selectedMarca, activo: value });
  };

  


  const activeMarcas = Marcas.filter((Marca: Marca) => Marca.activo);


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Categoria'} />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID de la Categoria: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la Marca"
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