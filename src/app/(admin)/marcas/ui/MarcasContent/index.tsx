'use client'

import { useEffect } from "react";
import { useMarcasStore } from "../../store";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";


export const MarcasContent = () => {

        const { getMarcas, marcas, selectMarca, siEsEdicion, noEsEdicion } = useMarcasStore((state) => ({
            getMarcas: state.getMarcas,
            marcas: state.marcas,
            selectMarca: state.selectMarca,
            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
    
        useEffect(() => {
            getMarcas(marcas);
          }, [getMarcas, marcas]);
        
          const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));

        
        const updateMarca = (key: number) => {
            if (key >= 0 && key < marcas.length) {
                const marcaSeleccionada = marcas[key].id;
                selectMarca(marcaSeleccionada);
            } 
            openModal();
            siEsEdicion();
        };
    
        const crearMarca = () => {
            noEsEdicion();
            openModal();
        };

    return (
        <div className="p-4">
            <TablaDinamica
                data={marcas} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateMarca}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearMarca}
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
                titulo="Mantenimiento de Marcas"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            /> 
        </div>
    );
}
