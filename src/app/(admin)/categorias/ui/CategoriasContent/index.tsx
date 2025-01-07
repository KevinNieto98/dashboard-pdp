'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";

import { FooterModal } from "../FooterModal";
import { Button } from "@nextui-org/react";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import { ContenidoModal } from "../ModalContent";
import { useUIStore } from "@/store";

export const CategoriasContent = () => {
        const { 
             siEsEdicion, 
        } = useSubCategoriasStore((state) => ({

            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
          
          const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));
    const {
        categorias,
        selectCategoria,
        selectTipo
    } = useCategoriasStore((state) => ({
        categorias: state.categorias,
        selectCategoria: state.selectCategoria,
        selectTipo: state.selectTipo,
    }));
    
    const updateCategoria = (key: number) => {
        if (key >= 0 && key < categorias.length) {
            const categoriaSeleccionada = categorias[key].id;
            selectCategoria(categoriaSeleccionada);
        }
        siEsEdicion();
        selectTipo('categoria');
        openModal();
    };
    return (
        <div className="p-4">
            <TablaDinamica
                data={categorias}
                tieneFuncion={true}
                needOpenModal={true}
                funcionBoton = {updateCategoria}
                aditionalButton={
                    <Button
                        color="success"
                        className="text-white"
                        //onPress={crearSubcategoria}
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
