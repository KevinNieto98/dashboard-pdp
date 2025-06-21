'use client'

import { useEffect, useState } from "react";
import { useUIStore } from "@/store";
import { Icon, ModalEdit, TablaDinamica } from "@/components";
import { Button, Spinner } from "@nextui-org/react";
import { ContenidoModal } from "../ModalContent";
import { FooterModal } from "../FooterModal";
import { useTonalidadesStore } from "../../store";
import { getTonalidadesAction } from "../../actions";

export const TonalidadesContent = () => {
    const [loading, setLoading] = useState(true);

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
        esVisibleAlerta,
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
            console.log('Refrescando tonalidades...');
            const nuevasTonalidades = await getTonalidadesAction();
               console.log('Refrescando tonalidades2...');
            tonalidadesCustom = transformarTonalidades(nuevasTonalidades);
            endRefresh();
               console.log('Refrescando tonalidades3...');
        }else {
               const nuevasTonalidades = await getTonalidadesAction();
               console.log('Refrescando tonalidades2...');
            tonalidadesCustom = transformarTonalidades(nuevasTonalidades);
            endRefresh();
            
        }
        getTonalidades(tonalidadesCustom);
        setLoading(false);
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [ refresh, endRefresh]);


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
        <>
            {loading ? <Spinner />

                :
                <div className="p-4">

                    <TablaDinamica
                        data={tonalidades}
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
