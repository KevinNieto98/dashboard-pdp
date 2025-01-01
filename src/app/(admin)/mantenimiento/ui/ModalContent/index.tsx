'use client'

import { Header } from "@/components";
import { useSubCategoriasStore } from "../../store";
import { Input, Switch } from "@nextui-org/react";
import { useState } from "react";



export const ContenidoModal = () => {
    const selectedSubCategoria = useSubCategoriasStore((state) => state.selectedSubCategoria);

    console.log('selectedSubCategoria: ', selectedSubCategoria);
    const {
        id,
        name,
        activo
    } = selectedSubCategoria;


    const [isSelected, setIsSelected] = useState(activo);
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
                    value={name}
                />
                <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                    Activa
                </Switch>
            </div>
        </div>
    );
};