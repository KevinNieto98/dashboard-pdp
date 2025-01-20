'use client'

import { Header } from "@/components";
import {  Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useMetodosStore } from "../../store";

interface Metodo {
    id: number;
    name: string;
    activo: boolean;
  }
export const ContenidoModal = () => {


  const { 
    selectedMetodo, 
    updateSelectedMetodo, 
    esEdicion ,
    metodos
  } = useMetodosStore((state) => ({
    selectedMetodo: state.selectedMetodo,
    updateSelectedMetodo: state.updateSelectedMetodo,
    esEdicion: state.esEdicion,
    metodos: state.metodos,


  }));


  const { id, name, activo } = selectedMetodo;

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
      updateSelectedMetodo({ ...selectedMetodo, name: e.target.value });


  };

  const handleSwitchChange = (value: boolean) => {
      setIsSelected(value);
      updateSelectedMetodo({ ...selectedMetodo, activo: value });
  };

  


  const activemetodos = metodos.filter((Metodo: Metodo) => Metodo.activo);


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
          placeholder="Ingrese el nombre de la Metodo"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />
        <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
          Activo
        </Switch>
        

      </div>
    </div>
  );
};