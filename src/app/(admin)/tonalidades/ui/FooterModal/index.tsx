'use client'

import { Confirm, Icon } from "@/components";
import { useEssentialsStore, useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
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
        selectedEssential,
        updateEssential,
        esEdicion
    } = useEssentialsStore((state) => ({
        selectedEssential: state.selectedEssential,
        updateEssential: state.updateEssential,
        esEdicion: state.esEdicion
    }));




    useEffect(() => {
        if (selectedEssential) {
            updateEssential(selectedEssential.id);
        }
    }, [selectedEssential, updateEssential]);


    const submitTonalidad = async () => {
        if (esEdicion) {
            if(esBorar){
                await deleteTonalidad(selectedEssential.id)
                setEsBorrar(false);
            }else {
                await putTonalidad(selectedEssential.id, selectedEssential.name);

            }
            // const maxId = tonalidades.reduce((max, item) => (item.id > max ? item.id : max), tonalidades[0].id);
            // addTonalidad({id:maxId +1,name: selectedEssential.name, activo: selectedEssential.activo});
            startRefresh();
        } else {
            await postTonalidadAction(selectedEssential.name);
            // const maxId = tonalidades.reduce((max, item) => (item.id > max ? item.id : max), tonalidades[0].id);
            // addTonalidad({id:maxId +1,name: selectedEssential.name, activo: selectedEssential.activo});
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