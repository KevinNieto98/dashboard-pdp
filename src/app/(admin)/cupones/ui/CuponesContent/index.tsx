'use client'

import { useEffect } from "react";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useCuponesStore } from "../../store";

export const CuponesContent = () => {

        const { 
            getCupones,
            cupones,
            selectCupon,
            siEsEdicion,
            noEsEdicion } 
        = useCuponesStore((state) => ({
            getCupones: state.getCupones,
            cupones: state.cupones,
            selectCupon: state.selectCupon,
            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
    
        useEffect(() => {
            getCupones(cupones);
          }, [getCupones, cupones]);
        
          const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));

        
        const updateCupones = (key: number) => {
            if (key >= 0 && key < cupones.length) {
                const Cuponeseleccionada = cupones[key].id;
                selectCupon(Cuponeseleccionada);
            } 
            openModal();
            siEsEdicion();
        };
    
        const crearCupones = () => {
            noEsEdicion();
            openModal();
        };

    return (
        <div className="p-4">
            <TablaDinamica
                data={cupones} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateCupones}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearCupones}
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
                titulo="Mantenimiento de Cupones"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            /> 
        </div>
    );
}
