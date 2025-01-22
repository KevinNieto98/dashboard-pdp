import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { MetodosContent } from "./ui";
import { AlertRegion, Content, Title } from "@/components";

export const metadata: Metadata = {
    title: 'Metodos de Pago',
    description: 'Metodos de Pago de la Tienda',
};

export default function MetodosPagoPage() {
    return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaCreditCard"}
                titulo="Metodos de Pago"
            />
            <Content>

                <Text
                    className=""
                    >
                    Pagina de Control de Metodos de Pago
                </Text>
                <MetodosContent />
            </Content>
          
        </div>
    );
}
