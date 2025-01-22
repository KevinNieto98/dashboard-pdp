import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

import { AlertRegion, Content, Title } from "@/components";
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
            <Content>


                <Text
                    className="pt-4"
                >
                    Pagina de Impuestos y Descuentos
                </Text>
                <AjustesContent />
            </Content>

        </div>
    );
}
