'use client'

import { Header } from "@/components";
import { useSubCategoriasStore } from "../../store";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";



export const ContenidoModal = () => {
    const selectedSubCategoria = useSubCategoriasStore((state) => state.selectedSubCategoria);
    const updateSelectedSubCategoria = useSubCategoriasStore((state) => state.updateSelectedSubCategoria);
  
    const { id, name, activo } = selectedSubCategoria;
  
    const [localName, setLocalName] = useState(name);
    const [isSelected, setIsSelected] = useState(activo);
  
    useEffect(() => {
      setLocalName(name);
      setIsSelected(activo);
    }, [name, activo]);
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalName(e.target.value);
      updateSelectedSubCategoria({ ...selectedSubCategoria, name: e.target.value });
    };
  
    const handleSwitchChange = (value: boolean) => {
      setIsSelected(value);
      updateSelectedSubCategoria({ ...selectedSubCategoria, activo: value });
    };
    return (
        <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col  justify-center py-12">
            <Header className = "pt-2" iconName={'FaFile'} titulo={'Detalle de Categoria'} />
            <div className="flex flex-col space-y-4 pt-5 px-2">
                <div>
                    <p>ID de la Categoria: {id}</p>
                </div>
                <Input
                    label="Nombre:"
                    placeholder="Ingrese el nombre de la subcategoria"
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