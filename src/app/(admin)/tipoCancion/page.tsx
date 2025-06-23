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
                titulo="Tipos de Cancion"
            />
            <Content>
                <TipoCancionContent
                    
                />
            
            </Content>
        </div>
    );
}
