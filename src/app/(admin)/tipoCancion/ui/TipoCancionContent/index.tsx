'use client'

import { useEffect, useState } from "react";
import { useEssentialsStore, useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button, Spinner } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { getTiposCancionAction } from "../../actions";

export const TipoCancionContent = () => {
    const [loading, setLoading] = useState(true);

    const transformarTiposCancion = (TiposCancionServer: any[]) => {
        return TiposCancionServer.map(item => ({
            id: item.id_tipoCancion,
            name: item.nombre_tono,
        }));
    };
    const { getEssentials, essentials, selectedEssential, siEsEdicion, noEsEdicion } = useEssentialsStore((state) => ({
        getEssentials: state.getEssentials,
        essentials: state.essentials,
        selectedEssential: state.selectedEssential,
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
        let TiposCancionCustom = []
        // Si hay refresh, pide los datos actualizados y actualiza el store
        if (refresh) {
            const nuevasTiposCancion = await getTiposCancionAction();
            TiposCancionCustom = transformarTiposCancion(nuevasTiposCancion);
            endRefresh();
        }else {
               const nuevasTiposCancion = await getTiposCancionAction();
            TiposCancionCustom = transformarTiposCancion(nuevasTiposCancion);
            endRefresh();
            
        }
        getEssentials(TiposCancionCustom);
        setLoading(false);
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [ refresh, endRefresh]);


const updatetipoCancion = (key: number) => {

        if (key >= 0 && key < essentials.length) {
            const TiposCancioneleccionada = essentials[key].id;
            selectedEssential(TiposCancioneleccionada);

        }
        openModal();
        siEsEdicion();
    };

    const creartipoCancion = () => {
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
                        funcionBoton={updatetipoCancion}
                        aditionalButton={
                            <Button
                                color="success"
                                className="text-white"
                                onPress={creartipoCancion}
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
                        titulo="Mantenimiento de TiposCancion"
                        children={<ContenidoModal />}
                        footer={<FooterModal />}
                    />
                </div>
            }
        </>
    );
}
