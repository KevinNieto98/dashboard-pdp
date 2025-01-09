'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";

import { FooterModal } from "../FooterModal";
import { Button } from "@nextui-org/react";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import { ContenidoModal } from "../ModalContent";
import { useUIStore } from "@/store";
import { SubCategoria } from "../../interfaces";

export const CategoriasContent = () => {

    //! SubCategorias
        const { 
             siEsEdicion, 
             subCategorias
        } = useSubCategoriasStore((state) => ({
            siEsEdicion: state.siEsEdicion,
            subCategorias: state.subCategorias,

          }));
          
    const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));
    //! Categorias
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

    const categoriasConSubCategoriasActivas = categorias.map(categoria => ({
        ...categoria,
        subCategorias: categoria.subCategorias.filter((subCategoria: SubCategoria) =>
          subCategorias.some(sc => sc.id === subCategoria.id && sc.activo)
        )
      }));

    return (
        <div className="p-4">
            <TablaDinamica
                data={categoriasConSubCategoriasActivas}
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
