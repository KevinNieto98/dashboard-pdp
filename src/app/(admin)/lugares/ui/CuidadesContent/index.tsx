'use client'
import { Icon, ModalEdit, TablaDinamica } from "@/components";

import { FooterModal } from "../FooterModal";
import { Button } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { useUIStore } from "@/store";
import { Colonia } from "../../interfaces";
import { useCiudadesStore, useColoniasStore } from "../../store";

export const CiudadesContent = () => {

    //! Colonias
        const { 
             siEsEdicion, 
             colonias
        } = useColoniasStore((state) => ({
            siEsEdicion: state.siEsEdicion,
            colonias: state.colonias,

          }));
          
    const { openModal } = useUIStore((state) => ({
            openModal: state.openModal,
          }));
    //! Ciudades
    const {
        ciudades,
        selectCiudad,
        selectTipo
    } = useCiudadesStore((state) => ({
        ciudades: state.ciudades,
        selectCiudad: state.selectCiudad,
        selectTipo: state.selectTipo,
    }));


    
    const updateCiudad = (key: number) => {
        if (key >= 0 && key < ciudades.length) {
            const ciudadSeleccionada = ciudades[key].id;
            selectCiudad(ciudadSeleccionada);
        }
        siEsEdicion();
        selectTipo('ciudad');
        openModal();
    };

    const ciudadConColoniasActivas = ciudades.map(ciudad => ({
        ...ciudad,
        colonias: ciudad.colonias.filter((colonia: Colonia) =>
            colonias.some(sc => sc.id === colonia.id && sc.activo)
        )
      }));

    return (
        <div className="p-4">
            <TablaDinamica
                data={ciudadConColoniasActivas}
                tieneFuncion={true}
                needOpenModal={true}
                funcionBoton = {updateCiudad}
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
                titulo="Mantenimiento de Ciudades"
                children={<ContenidoModal />}
                footer={<FooterModal />}
            />
        </div>
    );
}
