'use client'

import { useEffect } from "react";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useAjustesStore } from "../../store";

export const AjustesContent = () => {

        const { 
            getAjustes,
            ajustes,
            selectAjuste,
            siEsEdicion,
            noEsEdicion } 
        = useAjustesStore((state) => ({
            getAjustes: state.getAjustes,
            ajustes: state.ajustes,
            selectAjuste: state.selectAjuste,
            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
    
        useEffect(() => {
            getAjustes(ajustes);
          }, [getAjustes, ajustes]);
        
          const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));

        
        const updateAjuste = (key: number) => {
            if (key >= 0 && key < ajustes.length) {
                const Ajusteseleccionada = ajustes[key].id;
                selectAjuste(Ajusteseleccionada);
            } 
            openModal();
            siEsEdicion();
        };
    
        const crearAjuste = () => {
            noEsEdicion();
            openModal();
        };

    return (
        <div className="p-4">
            <TablaDinamica
                data={ajustes} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateAjuste}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearAjuste}
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
                titulo="Mantenimiento de Ajustes"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            /> 
        </div>
    );
}
