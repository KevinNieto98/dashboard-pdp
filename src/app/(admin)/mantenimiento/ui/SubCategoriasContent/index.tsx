'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button, Input } from "@nextui-org/react";
import { useSubCategoriasStore } from "../../store";
import { useUIStore } from "@/store";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useEffect } from "react";

export const SubCategoriasContent = () => {
    const getSubCategorias = useSubCategoriasStore((state) => state.getSubCategorias);
    const subCategorias = useSubCategoriasStore((state) => state.subCategorias);
    const selectSubCategoria = useSubCategoriasStore((state) => state.selectSubCategoria);
    const openModal = useUIStore((state) => state.openModal);

    useEffect(() => {
        getSubCategorias(subCategorias);
      }, [getSubCategorias, subCategorias]);
    
    const updateSubcategoria = (key: number) => {
        if (key >= 0 && key < subCategorias.length) {
            const subcategoriaSeleccionada = subCategorias[key].id;
            console.log('subcategoriaSeleccionada: ', subcategoriaSeleccionada);
            
            selectSubCategoria(subcategoriaSeleccionada);
        } 
        openModal();
    };


    return (
        <div className="p-4">
            <TablaDinamica
                data={subCategorias} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateSubcategoria}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={openModal}
                    startContent={
                        <Icon
                            name="FaPlus"
                        />
                    }
                >
                    Agregar
                </Button>
                }   
            />
            <ModalEdit
                esEjemplo={false}
                titulo="Mantenimiento de Sub-Categorias"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            />
        </div>
    );
}
