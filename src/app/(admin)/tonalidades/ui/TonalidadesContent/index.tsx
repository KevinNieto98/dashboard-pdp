'use client'

import { useEffect } from "react";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useTonalidadesStore } from "../../store";

interface TonalidadesContentProps {
    tonalidadesServer: any; // Replace 'any' with the actual type if known, e.g., Tonalidad[]
}

export const TonalidadesContent = ({tonalidadesServer}: TonalidadesContentProps) => {


    const transformarTonalidades = (tonalidadesServer: any[]) => {
    return tonalidadesServer.map(item => ({
        id: item.id_tonalidad,
        name: item.nombre_tono,
    }));
    };
        const { getTonalidades, tonalidades, selectTonalidad, siEsEdicion, noEsEdicion } = useTonalidadesStore((state) => ({
            getTonalidades: state.getTonalidades,
            tonalidades: state.tonalidades,
            selectTonalidad: state.selectTonalidad,
            siEsEdicion: state.siEsEdicion,
            noEsEdicion: state.noEsEdicion,
          }));
          
            const { openModal,
              esVisibleAlerta
             } = useUIStore((state) => ({
              openModal: state.openModal,
              esVisibleAlerta: state.esVisibleAlerta,
            }));
    
        useEffect(() => {
            const tonalidadesCustom = transformarTonalidades(tonalidadesServer);
            getTonalidades(tonalidadesCustom);
            console.log('Tonalidades obtenidas:', tonalidadesCustom);
            
          }, [getTonalidades, tonalidadesServer, esVisibleAlerta]);

        
        const updateTonalidad = (key: number) => {
            
            if (key >= 0 && key < tonalidades.length) {
                const Tonalidadeseleccionada = tonalidades[key].id;
                selectTonalidad(Tonalidadeseleccionada);

            } 
            openModal();
            siEsEdicion();
        };
    
        const crearTonalidad = () => {
            noEsEdicion();
            openModal();
        };

    return (
        <div className="p-4">
            <TablaDinamica
                data={tonalidades} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateTonalidad}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearTonalidad}
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
                titulo="Mantenimiento de Tonalidades"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            /> 
        </div>
    );
}
