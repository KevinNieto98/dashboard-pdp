'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button, Input } from "@nextui-org/react";
import { useSubCategoriasStore } from "../../store";
import { useUIStore } from "@/store";
import { ContenidoModal } from "../ModalContent";

export const SubCategoriasContent = () => {
    const getSubCategorias = useSubCategoriasStore((state) => state.getSubCategorias);
    const subCategorias = useSubCategoriasStore((state) => state.subCategorias);
    const selectSubCategoria = useSubCategoriasStore((state) => state.selectSubCategoria);
    const openModal = useUIStore((state) => state.openModal);

    getSubCategorias(subCategorias);
    
    const updateSubcategoria = (key: number) => {
        if (key >= 0 && key < subCategorias.length) {
            const subcategoriaSeleccionada = subCategorias[key].id;
            selectSubCategoria(subcategoriaSeleccionada);
        } 
        openModal();
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
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateSubcategoria}   
            />
            <ModalEdit
                esEjemplo={false}
                titulo="Mantenimiento de Sub-Categorias"
                children={<ContenidoModal />}
            />
        </div>
    );
}
