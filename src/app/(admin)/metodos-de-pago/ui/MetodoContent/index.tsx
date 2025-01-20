'use client'

import { useEffect } from "react";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useMetodosStore } from "../../store";


export const MetodosContent = () => {

        const { getmetodos, metodos, selectMetodo, siEsEdicion, noEsEdicion } = useMetodosStore((state) => ({
            getmetodos: state.getmetodos,
            metodos: state.metodos,
            selectMetodo: state.selectMetodo,
            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
    
        useEffect(() => {
            getmetodos(metodos);
          }, [getmetodos, metodos]);
        
          const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));

        
        const updateMetodo = (key: number) => {
            if (key >= 0 && key < metodos.length) {
                const metodoseleccionada = metodos[key].id;
                selectMetodo(metodoseleccionada);
            } 
            openModal();
            siEsEdicion();
        };
    
        const crearMetodo = () => {
            noEsEdicion();
            openModal();
        };

    return (
        <div className="p-4">
            <TablaDinamica
                data={metodos} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateMetodo}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearMetodo}
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
                titulo="Mantenimiento de Metodos"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            /> 
        </div>
    );
}
