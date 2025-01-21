import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

import { AlertRegion, Title } from "@/components";
import { AjustesContent } from "./ui";

export const metadata: Metadata = {
    title: 'Impuestos y Descuentos',
    description: 'Impuestos y Descuentos sobre facturas',
};

export default function ImpuestosDescuentosPage() {
    return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaPercent"}
                titulo="Impuestos y Descuentos" />
            <div className="px-12 my-6">

                <Text
                    className="pt-4"
                >
                    Pagina de Impuestos y Descuentos
                </Text>
                <AjustesContent />
            </div>
        </div>
    );
}
