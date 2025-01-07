'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import { useUIStore } from "@/store";
import { FooterModal } from "../FooterModal";
import { useEffect } from "react";
import { ContenidoModal } from "../ModalContent";

export const SubCategoriasContent = () => {
    const { getSubCategorias, subCategorias, selectSubCategoria, siEsEdicion, noEsEdicion } = useSubCategoriasStore((state) => ({
        getSubCategorias: state.getSubCategorias,
        subCategorias: state.subCategorias,
        selectSubCategoria: state.selectSubCategoria,
        siEsEdicion: state.siEsEdicion,
        noEsEdicion: state.noEsEdicion,
      }));

    const {
            selectTipo
    } = useCategoriasStore((state) => ({
            selectTipo: state.selectTipo,
        }));
      
      const { openModal } = useUIStore((state) => ({
        openModal: state.openModal,
      }));

    useEffect(() => {
        getSubCategorias(subCategorias);
      }, [getSubCategorias, subCategorias]);
    
    const updateSubcategoria = (key: number) => {
        if (key >= 0 && key < subCategorias.length) {
            const subcategoriaSeleccionada = subCategorias[key].id;
            selectSubCategoria(subcategoriaSeleccionada);
        } 
        selectTipo('subcategoria');
        openModal();
        siEsEdicion();
    };

    const crearSubcategoria = () => {
        noEsEdicion();
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
                    onPress={crearSubcategoria}
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
