'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTiposCancionStore } from "../../store";
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
        selectedTipoCancion,
        updateTipoCancion,
        esEdicion,

    } = useTiposCancionStore((state) => ({
        selectedTipoCancion: state.selectedTipoCancion,

        updateTipoCancion: state.updateTipoCancion,

        esEdicion: state.esEdicion,
        tiposCancion: state.tiposCancion,
    }));




    useEffect(() => {
        if (selectedTipoCancion) {
            updateTipoCancion(selectedTipoCancion.id);
        }
    }, [selectedTipoCancion, updateTipoCancion]);


    const submitTipoCancion = async () => {
        if (esEdicion) {
            if(esBorar){
                await deleteTipoCancion(selectedTipoCancion.id)
                setEsBorrar(false);
            }else {
                await putTipoCancion(selectedTipoCancion.id, selectedTipoCancion.name);

            }
            // const maxId = TiposCancion.reduce((max, item) => (item.id > max ? item.id : max), TiposCancion[0].id);
            // addTipoCancion({id:maxId +1,name: selectedTipoCancion.name, activo: selectedTipoCancion.activo});
            startRefresh();
        } else {
            await postTipoCancion(selectedTipoCancion.name);
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