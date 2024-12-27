'use client'
import { Icon, TablaDinamica } from "@/components";
import { Button, Input } from "@nextui-org/react";
import { useSubCategoriasStore } from "../../store";



export const SubCategoriasContent = () => {
    const getSubCategorias = useSubCategoriasStore((state) => state.getSubCategorias);
    const subCategorias = useSubCategoriasStore((state) => state.subCategorias);
    getSubCategorias(subCategorias);
    
    const updateSubcategoria = (key: number) => {
        if (key >= 0 && key < subCategorias.length) {
            const subcategoria = subCategorias[key];
            console.log('subcategoria', subcategoria);  
        } 
    };


    return (
        <div className="p-4">
            <div className="flex items-center space-x-4 mb-10">
                <Input
                    label="Sub-Categoria"
                    placeholder="Ingrese el nombre de la subcategoria"
                    type="text"
                />
                <Button
                    color="success"
                    className="text-white"
                    startContent={
                        <Icon
                            name="FaPlus"
                        />
                    }
                >
                    Agregar
                </Button>
            </div>
            <TablaDinamica
                data={subCategorias} 
                needTopContent={false} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateSubcategoria}   
            />
        </div>
    );
}
