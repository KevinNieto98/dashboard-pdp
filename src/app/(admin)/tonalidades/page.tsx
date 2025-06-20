import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

import { AlertRegion, Content, Title } from "@/components";
import { TonalidadesContent } from "./ui";
import { getTonalidadesAction } from "./actions";
import { Tonalidad } from './interfaces/tonalidades.interface';
import { log } from 'node:console';

export const metadata: Metadata = {
    title: 'Tonalidades',
    description: 'Mantenimiento de Tonalidades',
};

export default async function TonalidadesPage() {


    const tonalidades = await getTonalidadesAction();
    log('Tonalidades obtenidas:', tonalidades);
     return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaTag"}
                titulo="Tonalidades"
            />
            <Content>

                <Text
                    className=""
                    >
                    Pagina de Control de Tonalidades
                </Text>
                <TonalidadesContent
                    tonalidadesServer={tonalidades as Tonalidad[]}
                />
            
            </Content>
        </div>
    );
}
