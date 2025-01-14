import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

import { AlertRegion } from "@/components";
import { AjustesContent } from "./ui";

export const metadata: Metadata = {
    title: 'Impuestos y Descuentos',
    description: 'Impuestos y Descuentos sobre facturas',
   };

export default function ImpuestosDescuentosPage() {
    return (
        <div className="p-4">
            <AlertRegion/> 
            <Text
                as='b'
                fontSize='2xl'
            >
                 Impuestos y Descuentos
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Impuestos y Descuentos
            </Text>
            <AjustesContent/>
        </div>
    );
}
