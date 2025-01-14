'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button } from "@nextui-org/react";
import { useUIStore } from "@/store";
import { FooterModal } from "../FooterModal";
import { useEffect } from "react";
import { ContenidoModal } from "../ModalContent";
import { useCiudadesStore, useColoniasStore } from "../../store";

export const ColoniasContent = () => {
    const { getColonias, colonias, selectColonia, siEsEdicion, noEsEdicion } = useColoniasStore((state) => ({
        getColonias: state.getColonias,
        colonias: state.colonias,
        selectColonia: state.selectColonia,
        siEsEdicion: state.siEsEdicion,
        noEsEdicion: state.noEsEdicion,
      }));

    const {
            selectTipo,
            getCiudades,
            ciudades
    } = useCiudadesStore((state) => ({
            selectTipo: state.selectTipo,
            getCiudades: state.getCiudades,
            ciudades: state.ciudades,
        }));
      
      const { openModal } = useUIStore((state) => ({
        openModal: state.openModal,
      }));

    useEffect(() => {
        getColonias(colonias);
        getCiudades(ciudades);
      }, [getColonias, colonias]);
    
    const updateColonia = (key: number) => {
        if (key >= 0 && key < colonias.length) {
            const Coloniaseleccionada = colonias[key].id;
            selectColonia(Coloniaseleccionada);
        } 
        selectTipo('colonia');
        openModal();
        siEsEdicion();
    };

    const crearColonia = () => {
        console.log('crearColonia');
        selectTipo('colonia');
        noEsEdicion();
        openModal();
    };


    return (
        <div className="p-4">
            <TablaDinamica
                data={colonias} 
                tieneFuncion  = {true} 
                needOpenModal = {true}
                funcionBoton = {updateColonia}
                aditionalButton = {
                    <Button
                    color="success"
                    className="text-white"
                    onPress={crearColonia}
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
                titulo="Mantenimiento de Ciudades"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            />
        </div>
    );
}
