'use client'

import { Confirm, Icon } from "@/components";
import { useEssentialsStore, useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { deleteTipoCancion, postTipoCancion, putTipoCancion } from '../../actions/index';

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
        esEdicion,

    } = useEssentialsStore((state) => ({
        selectedEssential: state.selectedEssential,
        updateEssential: state.updateEssential,
        esEdicion: state.esEdicion,
        essentials: state.essentials,
    }));




    useEffect(() => {
        if (selectedEssential) {
            updateEssential(selectedEssential.id);
        }
    }, [selectedEssential, updateEssential]);


    const submitTipoCancion = async () => {
        if (esEdicion) {
            if(esBorar){
                await deleteTipoCancion(selectedEssential.id)
                setEsBorrar(false);
            }else {
                await putTipoCancion(selectedEssential.id, selectedEssential.name);

            }
            // const maxId = TiposCancion.reduce((max, item) => (item.id > max ? item.id : max), TiposCancion[0].id);
            // addTipoCancion({id:maxId +1,name: selectedTipoCancion.name, activo: selectedTipoCancion.activo});
            startRefresh();
        } else {
            await postTipoCancion(selectedEssential.name);
            // const maxId = TiposCancion.reduce((max, item) => (item.id > max ? item.id : max), TiposCancion[0].id);
            // addTipoCancion({id:maxId +1,name: selectedTipoCancion.name, activo: selectedTipoCancion.activo});
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
                funcionConfrm={submitTipoCancion}
                titletext="Acción Necesaria"
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí"
                rejectText="No"
            />
        </>

    );
};