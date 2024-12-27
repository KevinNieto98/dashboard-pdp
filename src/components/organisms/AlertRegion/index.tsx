'use client'

import { Alert } from "@/components";
import { useUIStore } from "@/store";


export const AlertRegion = () => {
    const alerta = useUIStore((state) => state.alerta);
    const {titulo,mensaje,tipo }= alerta;


    return (

        <>
            <Alert title={titulo} msg={mensaje} type={tipo}/>
        </>
    );
};
