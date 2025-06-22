import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { AlertRegion, Content, Title } from "@/components";
import { TipoCancionContent } from "./ui";

export const metadata: Metadata = {
    title: 'TipoCancion',
    description: 'Mantenimiento de Tipos de Canciones',
};

export default async function TipoCancionPage() {
     return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaTag"}
                titulo="TipoCancion"
            />
            <Content>

                <Text
                    className=""
                    >
                    Pagina de Control de Tipos  de Canciones
                </Text>
                <TipoCancionContent
                    
                />
            
            </Content>
        </div>
    );
}
