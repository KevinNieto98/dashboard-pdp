'use client'

import { useEffect, useState } from "react";
import { useEssentialsStore, useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button, Spinner } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { getTonalidadesAction } from "../../actions";

export const TonalidadesContent = () => {
    const [loading, setLoading] = useState(true);

    const transformarTonalidades = (tonalidadesServer: any[]) => {
        return tonalidadesServer.map(item => ({
            id: item.id_tonalidad,
            name: item.nombre_tono,
        }));
    };
    const { getEssentials, essentials, selectEssential, siEsEdicion, noEsEdicion } = useEssentialsStore((state) => ({
        getEssentials: state.getEssentials,
        essentials: state.essentials,
        selectEssential: state.selectEssential,
        siEsEdicion: state.siEsEdicion,
        noEsEdicion: state.noEsEdicion,
    }));

    const { openModal,
        refresh,
        endRefresh
    } = useUIStore((state) => ({
        openModal: state.openModal,
        esVisibleAlerta: state.esVisibleAlerta,
        refresh: state.refresh,
        endRefresh: state.endRefresh,
    }));


useEffect(() => {
    setLoading(true);
    const run = async () => {
        let tonalidadesCustom = []
        // Si hay refresh, pide los datos actualizados y actualiza el store
        if (refresh) {
            const nuevasTonalidades = await getTonalidadesAction();
            tonalidadesCustom = transformarTonalidades(nuevasTonalidades);
            endRefresh();
        }else {
               const nuevasTonalidades = await getTonalidadesAction();
            tonalidadesCustom = transformarTonalidades(nuevasTonalidades);
            endRefresh();
            
        }
        getEssentials(tonalidadesCustom);
        setLoading(false);
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [ refresh, endRefresh]);


const updateTonalidad = (key: number) => {

        if (key >= 0 && key < essentials.length) {
            const Tonalidadeseleccionada = essentials[key].id;
            selectEssential(Tonalidadeseleccionada);

        }
        openModal();
        siEsEdicion();
    };

    const crearTonalidad = () => {
        noEsEdicion();
        openModal();
    };

    return (
        <>
            {loading ? <Spinner />

                :
                <div className="p-4">

                    <TablaDinamica
                        data={essentials}
                        tieneFuncion={true}
                        needOpenModal={true}
                        funcionBoton={updateTonalidad}
                        aditionalButton={
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
            }
        </>
    );
}
