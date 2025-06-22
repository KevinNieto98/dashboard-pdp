'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTonalidadesStore } from "../../store";
import { deleteTonalidad, postTonalidadAction, putTonalidad } from '../../actions/index';

export const FooterModal = () => {
    const [esBorar, setEsBorrar] = useState(false);
    const { openModalConfirmacion, mostrarAlerta, startRefresh } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
        startRefresh: state.startRefresh,
        endRefresh: state.endRefresh,
    }));

    const {
        selectedTonalidad,
        updateTonalidad,
        esEdicion,

    } = useTonalidadesStore((state) => ({
        selectedTonalidad: state.selectedTonalidad,

        updateTonalidad: state.updateTonalidad,
        addTonalidad: state.addTonalidad,
        esEdicion: state.esEdicion,
        tonalidades: state.tonalidades,
    }));




    useEffect(() => {
        if (selectedTonalidad) {
            updateTonalidad(selectedTonalidad.id);
        }
    }, [selectedTonalidad, updateTonalidad]);


    const submitTonalidad = async () => {
        if (esEdicion) {
            if(esBorar){
                await deleteTonalidad(selectedTonalidad.id)
                setEsBorrar(false);
            }else {
                await putTonalidad(selectedTonalidad.id, selectedTonalidad.name);

            }
            // const maxId = tonalidades.reduce((max, item) => (item.id > max ? item.id : max), tonalidades[0].id);
            // addTonalidad({id:maxId +1,name: selectedTonalidad.name, activo: selectedTonalidad.activo});
            startRefresh();
        } else {
            await postTonalidadAction(selectedTonalidad.name);
            // const maxId = tonalidades.reduce((max, item) => (item.id > max ? item.id : max), tonalidades[0].id);
            // addTonalidad({id:maxId +1,name: selectedTonalidad.name, activo: selectedTonalidad.activo});
            startRefresh();
        }



        mostrarAlerta("Guardado", "Cambios aplicados correctamente", "success");


    };

    const handleDelete = () => {
        setEsBorrar(true);
        openModalConfirmacion();
    };
    return (
        <>
            <div className="flex items-center gap-2  justify-start">
                <Button
                    color="danger"
                    className="text-white"
                    onPress={handleDelete}
                    startContent={
                        <Icon
                            name="FaTrash"
                        />
                    }
                >
                    Borrar
                </Button>
            </div>
            <div className="flex items-center gap-2  justify-end">
                <Button
                    color="success"
                    className="text-white"
                    onPress={openModalConfirmacion}
                    startContent={
                        <Icon
                            name="FaSave"
                        />
                    }
                >
                    Guardar
                </Button>
            </div>
            <Confirm
                funcionConfrm={submitTonalidad}
                titletext="Acción Necesaria"
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí"
                rejectText="No"
            />
        </>

    );
};